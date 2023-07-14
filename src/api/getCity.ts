const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '889f0cd84330b182bf974584d4b2966d'

type WeatherMain = Record<
  | 'feels_like'
  | 'grnd_level'
  | 'humidity'
  | 'pressure'
  | 'sea_level'
  | 'temp'
  | 'temp_max'
  | 'temp_min',
  number
>

export type WeatherData = {
  base: string
  clouds: { all: number }
  cod: number
  coord: { lat: number; lon: number }
  dt: number
  id: number
  main: WeatherMain
  name: string
  sys: { country: string; sunrise: number; sunset: number }
  timezone: number
  visibility: number
  weather: [{ description: string; icon: string; id: number; main: string }]
  wind: { deg: number; gust: number; speed: number }
}

export const getCity = async (city: string) => {
  const response = await fetch(
    `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`,
  )
  const cityData: WeatherData = await response.json()

  return cityData
}
