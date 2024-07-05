import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from '../../services/jobs.service';
import { CommonModule } from '@angular/common';
import { Job } from '../../model/job.model';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  @Input() jobId!:string;
  jobDetails!: Job;

  constructor(private jobsService: JobsService,
    private router: Router) { }

  ngOnInit() {
    this.getJobsDetails(this.jobId);
  }

  getJobsDetails(jobId: string) {
    this.jobsService.getJobDetailsById(jobId).subscribe(data => {
      this.jobDetails = data;
    });
  }

  goBack() {
    this.router.navigate(['/jobs']);
  }
}
