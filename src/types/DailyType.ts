export interface DailyType {
  dt: number;
  temp: temp;
  weather: weather[];
}

interface weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface temp {
  min: number;
  max: number;
}
