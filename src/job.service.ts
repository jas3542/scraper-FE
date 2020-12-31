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
      "description": "best job ever in the best company. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis eros at vestibulum consectetur. Aliquam commodo aliquam rhoncus. Etiam porta lacus ac est viverra, sed ornare neque convallis. Maecenas sit amet lacus tempor, tempor mauris sed, hendrerit sapien. Nunc pharetra non erat viverra sodales. Vivamus id imperdiet erat. Maecenas sollicitudin eleifend posuere. Etiam convallis porta nisi, a consequat leo. Vivamus vel condimentum diam. Pellentesque tempor sagittis lectus at dictum. Curabitur facilisis ultrices risus, eget mollis urna interdum vitae. Donec eu mattis mi. Duis imperdiet blandit tincidunt. Nam ullamcorper non enim ac placerat. Sed aliquet facilisis lorem, id lacinia nulla hendrerit eget."
    },{
      "name": "job2",
      "location": "Birmingham",
      "company_name": "Asos",
      "salary": "26000",
      "description": "best job ever in the best company. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis eros at vestibulum consectetur. Aliquam commodo aliquam rhoncus. Etiam porta lacus ac est viverra, sed ornare neque convallis. Maecenas sit amet lacus tempor, tempor mauris sed, hendrerit sapien. Nunc pharetra non erat viverra sodales. Vivamus id imperdiet erat. Maecenas sollicitudin eleifend posuere. Etiam convallis porta nisi, a consequat leo. Vivamus vel condimentum diam. Pellentesque tempor sagittis lectus at dictum. Curabitur facilisis ultrices risus, eget mollis urna interdum vitae. Donec eu mattis mi. Duis imperdiet blandit tincidunt. Nam ullamcorper non enim ac placerat. Sed aliquet facilisis lorem, id lacinia nulla hendrerit eget."
    }]
  }
}
