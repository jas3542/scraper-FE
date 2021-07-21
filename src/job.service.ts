import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Job } from './app/Job';
import { JobMarker } from './app/JobMarker';

@Injectable({
  providedIn: 'any'
})

export class JobService {

  constructor(private httpClient: HttpClient) { }

  public getJobs() {
    return this.httpClient.get<Job[]>("https://localhost:44300/jobs")
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  public getOrderedJobs(orderBy: string) {
    var httpParams = new HttpParams().append("sortBy",orderBy);
    console.log("orderBy -> ",orderBy);
    return this.httpClient.get<Job[]>("https://localhost:44300/jobs/getOrderedList",{params: httpParams})
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  public getFilteredJobs(filterBy: string) {
    var text = encodeURIComponent(filterBy);
    var httpParams = new HttpParams().append("filterBy",text);
    
    return this.httpClient.get<Job[]>("https://localhost:44300/jobs/getFilteredList",{params: httpParams})
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  public getJobsMarkers() {
    return this.httpClient.get<Job[]>("https://localhost:44300/jobs/getMapMarkersList")
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  // Handle the errors
  private handleError(error: HttpErrorResponse) {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
