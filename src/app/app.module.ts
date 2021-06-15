import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';

import { JobService } from './../job.service';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';

// Map:
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Map:
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiamFzMzU0MiIsImEiOiJja255d3V4d2cwMDVqMm9xc3RvNG4wNmg5In0.ePzLRTeqjWo_UHPM2A6UPQ', // Optional, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'TOKEN' // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
