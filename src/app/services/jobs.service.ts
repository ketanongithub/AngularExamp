import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private favorites: Job[] = [];
  private favoriteJobsKey = 'favoriteJobs';
  constructor(private http:HttpClient) { 

    this.favorites = this.getFavoriteJobsFromStorage();
  }

  toggleFavorite(job: Job): void {
    const index = this.favorites.findIndex(j => j.id === job.id);
    if (index === -1) {
      this.favorites.push(job);
    } else {
      this.favorites.splice(index, 1);
    }

    this.saveFavoriteJobsToStorage();
  }

  getFavorites(): Job[] {
    return this.favorites;
  }

  isFavorite(job: Job): boolean {
    return this.favorites.some(j => j.id === job.id);
  }

  private saveFavoriteJobsToStorage(): void {
    localStorage.setItem(this.favoriteJobsKey, JSON.stringify(this.favorites));
  }

  private getFavoriteJobsFromStorage(): Job[] {
    const favoriteJobsJson = localStorage.getItem(this.favoriteJobsKey);
    return favoriteJobsJson ? JSON.parse(favoriteJobsJson) : [];
  }
}
