import { Component } from '@angular/core';
import { Job } from './Job';
import { JobService } from 'src/job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scraper-FE';
  public total_Jobs:number;
  public jobs_list: Job[] = [];

  public filterBy_word = "";
  
  switchToMapTab; // used for ngIf and css purpose on the template.

  constructor(private jobservice: JobService) {
    this.switchToMapTab = false;
  }

  ngOnInit(): void {
    
    this.jobservice.getJobs().subscribe((data) => { 
      if (data != undefined) {
        this.jobs_list = data ;
        this.total_Jobs = this.jobs_list?.length;
        //this.jobs_Count.emit(this.jobs?.length);
        console.log("i got the jobs ",this.jobs_list);
      }else {
        console.log("no Data received");
      }
    });

  }

  orderByList(value: any): void {
    this.filterBy_word = ""; 
    
    this.jobservice.getOrderedJobs(value).subscribe((data) => {
      if (data != undefined) {
        this.jobs_list = data ;
        this.total_Jobs = this.jobs_list?.length;
        console.log("I've got the orderedJobs ",this.jobs_list);
      }else {
        console.log("no Data received");
      }
    });
  }

  filterByList(): void {
    console.log("received this value ", this.filterBy_word);
      this.jobservice.getFilteredJobs(this.filterBy_word).subscribe((data) => { 
        if (data != undefined) {
          this.jobs_list = data ;
          this.total_Jobs = this.jobs_list?.length;
          console.log("I've got the filtered jobs ",this.jobs_list);
        }else {
          console.log("no Data received");
        }
      });
   
  }

  filterBy_inputChanged(event: any) { // without type info
    this.filterBy_word = event.target.value;
  }

  tabChanged(switchTab:any) {
   
    if (switchTab) {
      this.switchToMapTab = true;
    }else {
      this.switchToMapTab = false;
    }
  }

}
