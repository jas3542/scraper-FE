import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class JobService {

  constructor() { }

  public getJobs() {
    return [{
      "name": "job1",
      "location": "London",
      "company_name": "IBM",
      "salary": "30000",
      "description": "best job ever in the best company"
    },{
      "name": "job2",
      "location": "Birmingham",
      "company_name": "Asos",
      "salary": "26000",
      "description": "best job ever in the best company"
    }]
  }
}
