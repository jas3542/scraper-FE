import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  public jobs: Job[];
  constructor(private jobservice: JobService) {
    this.jobs = this.jobservice.getJobs();
   }

  ngOnInit(): void {

   
    console.log(this.jobs);
  }

}

export class Job {
  public name: string;
  public location: string;
  public company_name: string;
  public salary: string;
  public description: string;
}

