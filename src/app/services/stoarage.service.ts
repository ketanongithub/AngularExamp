import { Injectable } from '@angular/core';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class StoarageService {
  private favoriteJobsKey = 'favoriteJobs';
  constructor() {}

   //this is cache (localstorage) which store data in local storage while click on star fav icon
   saveFavoriteJobsToStorage(data:Job[]): void {
    localStorage.setItem(this.favoriteJobsKey, JSON.stringify(data));
  }

  //get data from local storage
  getFavoriteJobsFromStorage(): Job[] {
    const favoriteJobsJson = localStorage.getItem(this.favoriteJobsKey);
    return favoriteJobsJson ? JSON.parse(favoriteJobsJson) : [];
  }
}
