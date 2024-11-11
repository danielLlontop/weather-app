import { useWeather } from './hooks/useWeather'
import { WeatherData } from './components/WeatherData'
import { Credits } from './components/Credits'
import { Container, Typography } from '@mui/material'
import { FormWeather } from './components/FormWeather'
import { useContext } from 'react'
import { WeatherContext } from './context/WeatherProvider'

function App() {
  //hook que recibe el estado de la ciudad del formulario y lo envia al custom hook
  const {location} = useContext(WeatherContext)
  //hook que recibe la ciudad y devuelve el clima
  const {weather} = useWeather(location)
  return (
    <>
     <Container sx={{mt:5}} maxWidth='sm'>
      <Typography variant="h2" component='h1' align='center' gutterBottom>Weather App</Typography>
      <FormWeather />
      {weather && 
      //si el clima esta disponible, muestro el clima
        <WeatherData weather={weather} />
      }
      <Credits />
     </Container>
    </>
  )
}

export default App
