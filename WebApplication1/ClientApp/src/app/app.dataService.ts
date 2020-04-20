import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, range } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClient,
  ],
  providers: [
  ],
})

@Injectable(
)

export class DataService {

  public baseURL = "";
  public client: HttpClient; 

  constructor(
    client: HttpClient,
    @Inject('BASE_URL') baseUrl: string
    ) {
      this.baseURL = baseUrl;
      this.client = client;
  }

  public getWeatherForecast(): Observable<WeatherForecast[]>{

    console.log('Getting the waether foracast components');

    var url = this.baseURL + 'weatherforecast';

    return this.client.get<WeatherForecast[]>(url)
  }

}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

