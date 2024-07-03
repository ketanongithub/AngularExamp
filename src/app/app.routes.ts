import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { FavoriteJobsComponent } from './components/favorite-jobs/favorite-jobs.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

// export const routes: Routes = [];

export const routes: Routes = [
    { path: 'joblist', component: JobListComponent },
    { path: 'jobdetails', component: FavoriteJobsComponent },
    { path: 'joblist/:jobId', component: JobDetailsComponent },
    { path: '', redirectTo: '/joblist', pathMatch: 'full' },

  ];

 