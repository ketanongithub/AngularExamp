import { Component } from '@angular/core';
import { Job } from '../../model/job.model';
import { JobsService } from '../../services/jobs.service';
import { DisplayListComponent } from '../../commonwidget/display-list/display-list.component';

@Component({
  selector: 'app-favorite-jobs',
  standalone: true,
  imports: [DisplayListComponent],
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
