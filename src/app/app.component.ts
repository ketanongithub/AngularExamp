import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  activeTab: string = 'joblist';
  private subscription!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeTab = this.getActiveTab(event.url);
        this.redirectIfInvalid(event.url);
      }
    });
    // Set the initial active tab and redirect if necessary
    this.activeTab = this.getActiveTab(this.router.url);
    this.redirectIfInvalid(this.router.url);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getActiveTab(url: string): string {
    if (url.includes('/joblist')) {
      return 'joblist';
    } else if (url.includes('/jobdetails')) {
      return 'jobdetails';
    }
    return '';
  }

  private redirectIfInvalid(url: string) {
    if (!url.includes('/joblist') && !url.includes('/jobdetails')) {
      this.router.navigate(['/joblist']);
    }
  }

  
}