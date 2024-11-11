import { LoadingButton } from "@mui/lab"
import { Box, TextField } from "@mui/material"
import { WeatherContext } from "../context/WeatherProvider"
import { useContext } from "react"
export const FormWeather = () => {
   const {submit, loading, error} = useContext(WeatherContext)
    return (
        <Box component='form' onSubmit={submit} sx={{mt:5, display: 'grid', gap: 2} }>
            <TextField
                name='location'
                label='Ciudad'
                variant='outlined'
                error={error.error}
                helperText={error.message}
            />
            <LoadingButton
                loading={loading}
                type='submit'
                variant='contained'
                sx={{mt:2}}
                loadingIndicator="Buscando..."
               
            >
                Buscar
            </LoadingButton>
        </Box>
    )}