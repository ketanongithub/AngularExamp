import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job.model';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
 
  jobs: Job[] = []
  constructor(
    private jobsService:JobsService, 
    private router: Router) { }

  ngOnInit() {
    this.getJobs();
  }
  getJobs() {
    this.jobsService.getJobListData().subscribe(data => {
      this.jobs = data;
    });
  }

  toggleFavorite(job: Job) {
    this.jobsService.toggleFavorite(job);
  }

  isFavorite(job: Job): boolean {
    return this.jobsService.isFavorite(job);
  }

  navigateToJobDetais(jobData: Job) {
    this.router.navigate(['/joblist', jobData.id]);
  }
}
