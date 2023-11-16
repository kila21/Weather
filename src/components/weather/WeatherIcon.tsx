import ReactAnimatedWeather from "react-animated-weather";

// color="#61d9fb"
type iconsType = {
  [key: string]: string;
};

export const WeatherIcon = (props: { size: number; code: string }) => {
  const codeMapping: iconsType = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <ReactAnimatedWeather
      // icon={codeMapping[props.code]}
      icon={codeMapping[props.code]}
      size={props.size}
      color="#61d9fb"
      animated={true}
    />
  );
};
