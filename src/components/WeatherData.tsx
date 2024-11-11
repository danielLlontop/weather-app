import { Box, Typography } from "@mui/material"
import { WeatherResponse } from "../types"
export const WeatherData = ({weather} : {weather : WeatherResponse}) => {
    const {city, country, text_today, icon_today, temp_today, text_tomorrow, icon_tomorrow, temp_tomorrow,format_date} = weather
    return (
        <Box sx={{mt:5, display: 'grid', gap: 2, textAlign: 'center'}}>
        <Typography variant='h3' component='h4'>{city}, {country}</Typography>
        <Box 
        sx={{display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)', 
        justifyItems: 'center', 
        alignItems: 'center'}}>
          <Typography variant='h3' component='h4' >Hoy</Typography>
          <Typography variant='h3' component='h4' >Mañana</Typography>

          <Box component='img'  src={icon_today} width='100px' height='100px' />	
          <Box component='img'  src={icon_tomorrow} width='100px' height='100px' />

          <Typography variant='h3' component='h4'  >{temp_today}°C</Typography>
          <Typography variant='h3' component='h4' >{temp_tomorrow}°C</Typography>

          <Typography variant='h4' component='h5' >{text_today}</Typography>
          <Typography variant='h4' component='h5' >{text_tomorrow}</Typography>
          <Typography sx={{gridColumn: 'span 2', mt: 2}} variant='h6' component='h5'  gutterBottom>Actualizado el {format_date}</Typography>
        </Box>
      </Box>
    )
}