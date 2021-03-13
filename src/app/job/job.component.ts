import { Component, OnInit, Input } from '@angular/core';
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
  @Input() jobs: Job[] = [];

  constructor(private jobservice: JobService) {  }

  ngOnInit(): void {
    
  }

}