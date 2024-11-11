import { useEffect, useState } from "react"
import { WeatherResponse, Weather} from "../types"
import { FormatDate } from "../components/FormatDate"
const WEATHER_API_KEY: string = import.meta.env.VITE_WEATHER_API_KEY

export const useWeather = (location : string) => {
    const [weather, setWeather] = useState<WeatherResponse>()

    useEffect(() => {
    //si la ciudad esta ingresada, envio la peticion a la api
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=2&aqi=no&alerts=no&lang=es`)
        .then(res => res.json() as Promise<Weather>)
        .then(data => setWeather(
        {
            city: data.location.name,
            country: data.location.country,
            text_today: data.current.condition.text,
            icon_today: data.current.condition.icon,
            temp_today: data.current.temp_c,
            last_update: data.current.last_updated,
            text_tomorrow: data.forecast.forecastday[1].day.condition.text,
            icon_tomorrow: data.forecast.forecastday[1].day.condition.icon,
            temp_tomorrow: data.forecast.forecastday[1].day.avgtemp_c,
            format_date: FormatDate(data.current.last_updated)

        }
    ))
        
    }, [location])

    
    return {weather}
}

