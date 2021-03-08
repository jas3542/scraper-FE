import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/job.service';
import { Job } from 'src/app/Job';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  
  @Output() jobs_Count: EventEmitter<number> = new EventEmitter<number>();
  public jobs: Job[] = [];

  constructor(private jobservice: JobService) {  }

  ngOnInit(): void {
    this.jobservice.getJobs().subscribe((data) => { 
      if (data != undefined) {
        this.jobs = data ;
        this.jobs_Count.emit(this.jobs?.length);
        console.log("i got the jobs ",this.jobs);
      }else {
        console.log("no Data received");
      }
    });
  }

  orderByList(value: any): void {
    //console.log("testset",value);
    this.jobservice.getJobsOrdered().subscribe((data) => {
      if (data != undefined) {
        this.jobs = data ;
        console.log("i got the jobs ",this.jobs);
      }else {
        console.log("no Data received");
      }
    });
  }


}