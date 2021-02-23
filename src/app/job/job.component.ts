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
  constructor(private jobservice: JobService) {
    this.jobservice.getJobs().subscribe((data) => { 
      if (data != undefined) {
        this.jobs.push(data);
        //this.jobs_Count.emit(this.jobs.length);
        this.jobs_Count.emit(this.jobs[0]?.length);
      }else {
        console.log("no Data received");
      }
      console.log("i got the jobs ",this.jobs);
    });
  }

  ngOnInit(): void {
    
    
    
  }

}

// export class Job {
//   public name: string;
//   public location: string;
//   public company_name: string;
//   public salary: string;
//   public description: string;
// }

