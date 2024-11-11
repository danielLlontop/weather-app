import { Link, Typography } from "@mui/material"

export const Credits = () => {
    return (
        <Typography variant='body1' component='p' align='center' sx={{mt:2}} gutterBottom>
        Powered by: <Link href='https://www.weatherapi.com/'>WeatherAPI</Link>
      </Typography>
    )
}