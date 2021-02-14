import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/job.service';
import { Job } from 'src/app/Job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  public jobs: Job[] = [];
  constructor(private jobservice: JobService) {
    this.jobservice.getJobs().subscribe((data) => { 
      if (data != undefined) {
        this.jobs.push(data);
      }else {
        console.log("no Data received");
      }
      console.log("i got the jobs ",this.jobs);
    });
  }

  ngOnInit(): void {

   
    console.log(this.jobs);
  }

}

// export class Job {
//   public name: string;
//   public location: string;
//   public company_name: string;
//   public salary: string;
//   public description: string;
// }

