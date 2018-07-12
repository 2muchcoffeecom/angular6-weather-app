import { Injectable } from '@angular/core';

import { City } from '../interfaces/city';
import { CITIES } from '../../mocks/cities.mock'; // importing test data


@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  getCities(): Array<City> {
    return CITIES;  // method returns an array of cities
  }

}
