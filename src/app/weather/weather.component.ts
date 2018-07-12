import { Component, OnInit } from '@angular/core';

import { City } from '../core/interfaces/city';
import { CitiesService } from '../core/services/cities.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cities: Array<City> = [];
  choosedCity: number = null;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.cities = this.citiesService.getCities();
  }

  onChooseCity(index: number): void {
    this.choosedCity = index;
  }

}
