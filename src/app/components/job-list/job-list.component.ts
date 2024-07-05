import { Component, OnDestroy, OnInit } from '@angular/core';
import { Job } from '../../model/job.model';
import { JobsService } from '../../services/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayListComponent } from '../../commonwidget/display-list/display-list.component';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [DisplayListComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit, OnDestroy {
 
  jobs: Job[] = [];
  private subscription!: Subscription;

  constructor(
    private jobsService:JobsService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.subscription = this.activatedRoute.params.subscribe(params => {
     this.getJobs();
     });
  }
  
  getJobs() {
    this.jobsService.getJobListData().subscribe(data => {
      this.jobs = data;
    });
  }

  toggleFavorite(job: Job) {
    this.jobsService.toggleFavorite(job);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
