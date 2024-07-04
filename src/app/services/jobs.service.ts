import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../model/job.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private favorites: Job[] = [];
  private favoriteJobsKey = 'favoriteJobs';
  constructor(private http:HttpClient) { 
    this.favorites = this.getFavoriteJobsFromStorage();
  }

  //This function to store data in array while click on favorite star icon
  toggleFavorite(job: Job): void {
    const index = this.favorites.findIndex(j => j.id === job.id);
    if (index === -1) {
      this.favorites.push(job);
    } else {
      this.favorites.splice(index, 1);
    }
    this.saveFavoriteJobsToStorage();
  }

  // this function to get favorite data which is display on favorite tab
  getFavorites(): Job[] {
    return this.favorites;
  }

  isFavorite(job: Job): boolean {
    return this.favorites.some(j => j.id === job.id);
  }

  //this is cache (localstorage) which store data in local storage while click on star fav icon
  private saveFavoriteJobsToStorage(): void {
    localStorage.setItem(this.favoriteJobsKey, JSON.stringify(this.favorites));
  }

  //get data from local storage
  private getFavoriteJobsFromStorage(): Job[] {
    const favoriteJobsJson = localStorage.getItem(this.favoriteJobsKey);
    return favoriteJobsJson ? JSON.parse(favoriteJobsJson) : [];
  }

  getJobListData(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs').pipe(
      catchError(this.handleError<Job[]>('getJobListData', []))
    );
  }
  
  getJobDetailsById(jobId: string): Observable<Job> {
    return this.http.get<Job>(`/jobs/${jobId}`).pipe(
      catchError(this.handleError<Job>('getJobDetailsById'))
    );
  }

 private handleError<T>(operation: string, result?: T): (error: HttpErrorResponse) => Observable<T> {
  return (error: HttpErrorResponse): Observable<T> => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(`${operation} error:`, error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `${operation} failed, ` +
        `backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError(() =>
      `Something bad happened during the '${operation}' operation; please try again later.`
    );
  };
}

  
}
