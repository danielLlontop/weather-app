import { createContext, useState } from "react"
import { errorQuery, WeatherContextType } from "../types"

export const WeatherContext = createContext<WeatherContextType>({
    location: '',
    setLocation: () => {},
    loading: true,
    error: {error: false, message: ''},
    submit: () => {},
    setError: () => {},
})

export const WeatherProvider = ({children}: {children: React.ReactNode}) => {
    //estado para mostrar el loading
    const [loading, setLoading] = useState<boolean>(false)
    //estado que recibe la ciudad del formulario
    const [location, setLocation] = useState<string>('') 
     //estado para mostrar los errores
     const [error, setError] = useState<errorQuery>({error: false, message: ''})
     //funcion para enviar el formulario
     const submit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true) 
         const newLocation = e.currentTarget.location.value
            try {   
             //si el input esta vacio, lanzo un error
             if (!newLocation.trim()) throw new Error('Ingrese una ciudad')
            } catch (error) {
             //si ocurre un error, asigno la data al estado error
             if (error instanceof Error) setError({error: true, message: error.message})
            }
            //si no ocurre un error, asigno la data al estado location
            setLocation(newLocation)
            //reinicio el estado de loading
            setLoading(false)
     }
return (
    <WeatherContext.Provider value={{location, setLocation, loading, error, submit, setError}}>
        {children}
    </WeatherContext.Provider>
)}