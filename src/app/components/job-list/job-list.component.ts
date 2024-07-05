import { Component, OnInit } from '@angular/core';
import { DisplayListComponent } from '../../commonwidget/display-list/display-list.component';
import { Job } from '../../model/job.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [DisplayListComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {

  jobs: Job[] = [];

  constructor(
    private jobsService: JobsService) { }

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
}
