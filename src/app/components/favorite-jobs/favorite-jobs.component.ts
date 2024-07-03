import { Component } from '@angular/core';
import { Job } from '../../model/job.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-favorite-jobs',
  standalone: true,
  imports: [],
  templateUrl: './favorite-jobs.component.html',
  styleUrl: './favorite-jobs.component.css'
})
export class FavoriteJobsComponent {
  favorites: Job[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.favorites = this.jobsService.getFavorites();
  }
}
