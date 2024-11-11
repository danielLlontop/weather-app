
export interface Weather {
    location: Location;
    current:  Current;
    forecast: Forecast;
}

export interface Current {
    last_updated_epoch?: number;
    last_updated:       string;
    temp_c:              number;
    temp_f:              number;
    is_day:              number;
    condition:           Condition;
    wind_mph:            number;
    wind_kph:            number;
    wind_degree:         number;
    wind_dir:            WindDir;
    pressure_mb:         number;
    pressure_in:         number;
    precip_mm:           number;
    precip_in:           number;
    humidity:            number;
    cloud:               number;
    feelslike_c:         number;
    feelslike_f:         number;
    windchill_c:         number;
    windchill_f:         number;
    heatindex_c:         number;
    heatindex_f:         number;
    dewpoint_c:          number;
    dewpoint_f:          number;
    vis_km:              number;
    vis_miles:           number;
    uv:                  number;
    gust_mph:            number;
    gust_kph:            number;
    time_epoch?:         number;
    time?:               string;
    snow_cm?:            number;
    will_it_rain?:       number;
    chance_of_rain?:     number;
    will_it_snow?:       number;
    chance_of_snow?:     number;
}

export interface Condition {
    text: Text;
    icon: Icon;
    code: number;
}

export enum Icon {
    CDNWeatherapiCOMWeather64X64Day113PNG = "//cdn.weatherapi.com/weather/64x64/day/113.png",
    CDNWeatherapiCOMWeather64X64Day116PNG = "//cdn.weatherapi.com/weather/64x64/day/116.png",
    CDNWeatherapiCOMWeather64X64Day122PNG = "//cdn.weatherapi.com/weather/64x64/day/122.png",
    CDNWeatherapiCOMWeather64X64Night113PNG = "//cdn.weatherapi.com/weather/64x64/night/113.png",
    CDNWeatherapiCOMWeather64X64Night116PNG = "//cdn.weatherapi.com/weather/64x64/night/116.png",
    CDNWeatherapiCOMWeather64X64Night119PNG = "//cdn.weatherapi.com/weather/64x64/night/119.png",
    CDNWeatherapiCOMWeather64X64Night122PNG = "//cdn.weatherapi.com/weather/64x64/night/122.png",
}

export enum Text {
    Clear = "Clear ",
    Cloudy = "Cloudy ",
    Overcast = "Overcast ",
    PartlyCloudy = "Partly Cloudy ",
    Sunny = "Sunny",
}

export enum WindDir {
    S = "S",
    SSE = "SSE",
    Ssw = "SSW",
    Sw = "SW",
    Wsw = "WSW",
}

export interface Forecast {
    forecastday: Forecastday[];
}

export interface Forecastday {
    date:       Date;
    date_epoch: number;
    day:        Day;
    astro:      Astro;
    hour:       Current[];
}

export interface Astro {
    sunrise:           string;
    sunset:            string;
    moonrise:          string;
    moonset:           string;
    moon_phase:        string;
    moon_illumination: number;
    is_moon_up:        number;
    is_sun_up:         number;
}

export interface Day {
    maxtemp_c:            number;
    maxtemp_f:            number;
    mintemp_c:            number;
    mintemp_f:            number;
    avgtemp_c:            number;
    avgtemp_f:            number;
    maxwind_mph:          number;
    maxwind_kph:          number;
    totalprecip_mm:       number;
    totalprecip_in:       number;
    totalsnow_cm:         number;
    avgvis_km:            number;
    avgvis_miles:         number;
    avghumidity:          number;
    daily_will_it_rain:   number;
    daily_chance_of_rain: number;
    daily_will_it_snow:   number;
    daily_chance_of_snow: number;
    condition:            Condition;
    uv:                   number;
}

export interface Location {
    name:            string;
    region:          string;
    country:         string;
    lat:             number;
    lon:             number;
    tz_id:           string;
    localtime_epoch: number;
    localtime:       string;
}

//tipo de respuesta de la api
export interface WeatherResponse {
    city: string;
    country: string;
    text_today: string;
    icon_today: string;
    temp_today: number;
    last_update: string,
    text_tomorrow: string;
    icon_tomorrow: string;
    temp_tomorrow: number;
    format_date: FormatDateType

}
//tipo de error
export interface errorQuery {
    error: boolean;
    message: string;
}

export interface WeatherContextType {
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    error: errorQuery;
    submit: (e: React.FormEvent<HTMLFormElement>) => void;
    setError: React.Dispatch<React.SetStateAction<errorQuery>>;
}

export type FormatDateType = `${number}-${number}-${number} a las ${number}:${number|string} ${string}`