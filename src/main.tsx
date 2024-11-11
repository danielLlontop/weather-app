import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { WeatherProvider } from './context/WeatherProvider'

createRoot(document.getElementById('root')!).render(
  <WeatherProvider >
    <App />
  </WeatherProvider>,
)
