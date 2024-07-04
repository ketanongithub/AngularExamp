import { Component, Input } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';
import { Job } from '../../model/job.model';

@Component({
  selector: 'app-display-list',
  standalone: true,
  imports: [],
  templateUrl: './display-list.component.html',
  styleUrl: './display-list.component.css'
})
export class DisplayListComponent {
  @Input()
  jobs!: Job[];

  @Input()
  showList: boolean = false;

  constructor(
    private jobsService: JobsService,
    private router: Router) { }

  isFavorite(job: Job): boolean {
    return this.jobsService.isFavorite(job);
  }

  navigateToJobDetais(jobData: Job) {
    this.router.navigate(['/joblist', jobData.id]);
  }

  toggleFavorite(job: Job) {
    this.jobsService.toggleFavorite(job);
  }
}
