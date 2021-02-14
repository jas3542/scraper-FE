import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Job } from './app/Job';

@Injectable({
  providedIn: 'any'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  // public getJobs() {
  //   return [{
  //     "name": "job1",
  //     "location": "London",
  //     "company_name": "IBM",
  //     "salary": "30000",
  //     "description": "best job ever in the best company. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis eros at vestibulum consectetur. Aliquam commodo aliquam rhoncus. Etiam porta lacus ac est viverra, sed ornare neque convallis. Maecenas sit amet lacus tempor, tempor mauris sed, hendrerit sapien. Nunc pharetra non erat viverra sodales. Vivamus id imperdiet erat. Maecenas sollicitudin eleifend posuere. Etiam convallis porta nisi, a consequat leo. Vivamus vel condimentum diam. Pellentesque tempor sagittis lectus at dictum. Curabitur facilisis ultrices risus, eget mollis urna interdum vitae. Donec eu mattis mi. Duis imperdiet blandit tincidunt. Nam ullamcorper non enim ac placerat. Sed aliquet facilisis lorem, id lacinia nulla hendrerit eget."
  //   },{
  //     "name": "job2",
  //     "location": "Birmingham",
  //     "company_name": "Asos",
  //     "salary": "26000",
  //     "description": "best job ever in the best company. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis eros at vestibulum consectetur. Aliquam commodo aliquam rhoncus. Etiam porta lacus ac est viverra, sed ornare neque convallis. Maecenas sit amet lacus tempor, tempor mauris sed, hendrerit sapien. Nunc pharetra non erat viverra sodales. Vivamus id imperdiet erat. Maecenas sollicitudin eleifend posuere. Etiam convallis porta nisi, a consequat leo. Vivamus vel condimentum diam. Pellentesque tempor sagittis lectus at dictum. Curabitur facilisis ultrices risus, eget mollis urna interdum vitae. Donec eu mattis mi. Duis imperdiet blandit tincidunt. Nam ullamcorper non enim ac placerat. Sed aliquet facilisis lorem, id lacinia nulla hendrerit eget."
  //   }]
  // }
  public getJobs() {
    return this.httpClient.get<Job>("https://localhost:44300/jobs")
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );;

  }
  // Handle the errors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
