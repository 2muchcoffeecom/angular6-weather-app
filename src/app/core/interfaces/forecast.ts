export interface Forecast {
  conditions: string;
  wind: {
    speed: number;
    direction: string;
  };
  temperature: {
    day: {
      min: number;
      max: number;
    },
    night: {
      min: number;
      max: number;
    }
  };
}
