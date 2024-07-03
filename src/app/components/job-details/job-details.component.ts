import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobdetails } from '../../model/jobdetails.model';
import { MyDateFormatPipe } from '../../pipes/my-date-format.pipe';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [MyDateFormatPipe],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  jobDetails!: Jobdetails;
  constructor(private http: HttpClient,
     private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    this.getJobsDetails(jobId);
  }
  getJobsDetails(jobId: string | null) {
    this.http.get<Jobdetails>(`/jobs/${jobId}`)
      .subscribe(data => {
        this.jobDetails = data;
      });
  }

  goBack() {
    this.router.navigate(['/joblist']);

  }
}
