const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export async function getWeather(city: string) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  )

  if (!res.ok)
    throw new Error("Weather fetch failed")

  return res.json()
}
