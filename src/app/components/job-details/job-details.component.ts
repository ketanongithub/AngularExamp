import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  jobDetails!: Job;
  constructor(private jobsService: JobsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    this.getJobsDetails(jobId!!);
  }

  getJobsDetails(jobId: string) {
    this.jobsService.getJobDetailsById(jobId).subscribe(data => {
      this.jobDetails = data;
    });
  }

  goBack() {
    this.router.navigate(['/joblist']);

  }
}
