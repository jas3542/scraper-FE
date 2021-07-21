import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/job.service';
import { Job } from '../Job';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  jobsMarker_list: Job[] = [];
  showJobSpecs: boolean = false;
  job_details: Job;

  constructor(private jobservice: JobService) { }

  ngOnInit(): void {
    this.jobservice.getJobsMarkers().subscribe((data) => {
      if (data != undefined) {
        this.jobsMarker_list = data;
        // this.total_Jobs = this.jobs_list?.length;
        //this.jobs_Count.emit(this.jobs?.length);
        console.log("i got the markers ",data);
      }else {
        console.log("no Data received");
      }
    });
  }

  showJobDetails(job){
    console.log(job);
    this.showJobSpecs = true;
    this.job_details = job;

  }

}
