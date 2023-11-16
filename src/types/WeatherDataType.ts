export interface WeatherData {
  name: string;
  coord: { lon: number; lat: number };
  feels_like: number;
  humidity: number;
  temp_max: number;
  temp_min: number;
  wind: number;
  country: string;
  description: string;
  timezone: number;
  icon: string;
  temperature: number;
  date: Date;
}
