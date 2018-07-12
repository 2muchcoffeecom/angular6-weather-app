import { City } from '../core/interfaces/city';

export const CITIES: Array<City> = [
  {
    name: 'New-York',
    forecast: {
      conditions: 'cloudly',
      wind: {
        speed: 6,
        direction: 'north-west'
      },
      temperature: {
        day: {
          min: 14,
          max: 18
        },
        night: {
          min: 5,
          max: 8
        }
      }
    }
  },
  {
    name: 'London',
    forecast: {
      conditions: 'rainy',
      wind: {
        speed: 3,
        direction: 'east'
      },
      temperature: {
        day: {
          min: 11,
          max: 14
        },
        night: {
          min: 3,
          max: 7
        }
      }
    }
  },
  {
    name: 'Tokyo',
    forecast: {
      conditions: 'sunny',
      wind: {
        speed: 2,
        direction: 'south'
      },
      temperature: {
        day: {
          min: 22,
          max: 28
        },
        night: {
          min: 16,
          max: 19
        }
      }
    }
  }
];
