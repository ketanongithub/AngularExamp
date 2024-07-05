import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { FavoriteJobsComponent } from './components/favorite-jobs/favorite-jobs.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

// export const routes: Routes = [];

export const routes: Routes = [
    { path: 'jobs', component: JobListComponent },
    { path: 'favjob', component: FavoriteJobsComponent },
    { path: 'jobs/:jobId', component: JobDetailsComponent },
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },

  ];

 