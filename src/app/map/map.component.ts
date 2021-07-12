import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/job.service';
import { JobMarker } from 'src/app/Jobmarker';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  jobsMarker_list: JobMarker[] = [];
  
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

  jobNameDialog(name){
    console.log(name);

  }

}
