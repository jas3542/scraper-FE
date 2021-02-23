import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scraper-FE';
  public total_Jobs:number;

  public totalJobs(firedEvent: any) {
    this.total_Jobs = firedEvent;
  }
}
