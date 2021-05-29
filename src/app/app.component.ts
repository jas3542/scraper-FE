import { Component } from '@angular/core';
import { Job } from './Job';
import { JobService } from 'src/job.service';
import { ViewChild } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

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

  // Reference template variables inside Component
  @ViewChild('jobsTab') jobsTab: ElementRef;
  @ViewChild('jobsMapTab') jobs_map_tab: ElementRef;
  
  showJobsTab = true;
  showJobsMapTab = false;

  constructor(private jobservice: JobService,private renderer: Renderer2) {

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

  tabChanged(event:any) {
    console.log(event.getAttribute("id"))
    
    if (event.getAttribute("id") == this.jobsTab.nativeElement.getAttribute("id")) {
      this.jobsTab.nativeElement.hidden = false;
      this.jobs_map_tab.nativeElement.hidden = true;
      // For Template:
      this.showJobsMapTab = false;
      this.showJobsTab = true;
      
    }

    if (event.getAttribute("id") == this.jobs_map_tab.nativeElement.getAttribute("id")) {
      this.jobsTab.nativeElement.hidden = true;
      this.jobs_map_tab.nativeElement.hidden = false;
      // For Template: 
      this.showJobsMapTab = true;
      this.showJobsTab = false;
    }

    // console.log(this.jobsTab.nativeElement.getAttribute("id").hide())
  }

}
