import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../app.dataService';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  providers: [
    DataService
  ],
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(
    private dataService: DataService,
    http: HttpClient,
    @Inject('BASE_URL') baseUrl: string)
  {
    //http.get<WeatherForecast[]>(baseUrl + 'weatherforecast')
    this.dataService.getWeatherForecast()
      .subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
