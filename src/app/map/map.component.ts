import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/job.service';
import { Job } from '../Job';
import { LongitudLatitude } from '../JobMarker';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  jobsMarker_list: Map<LongitudLatitude,Job[]>; //= new Map<[string, string],Job[]>();
  showJobSpecs: boolean = false;
  jobs: Job[];

  constructor(private jobservice: JobService) { }

  ngOnInit(): void {
    this.jobservice.getJobsMarkers().subscribe((data) => {
      if (data != undefined) {
        this.jobsMarker_list = data;
        console.log("i got the markers ",data);
      }else {
        console.log("no Data received");
      }
    });
  }

  showJobDetails(jobs){
    console.log(jobs);
    this.showJobSpecs = true;
    this.jobs = jobs;

  }

}
