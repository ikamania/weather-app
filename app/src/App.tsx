import { useState } from 'react'
import { useWeather } from "./hooks/useWeather"
import MainInfo from "./components/MainInfo"
import MainIcon from "./components/MainIcon"
import WeatherStats from "./components/WeatherStats"
import Loading from "./components/Loading"

function App() {
  const { data, loading, error } = useWeather("Tbilisi")

  if (loading || !data)
    return <Loading text="Loading ..." />
  if (error)
    return <Loading text="Error fetching weather ..." />

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-[#112466] to-[#2d2fb3]">
      <MainInfo
        location={data.location.name}
        date={data.location.localtime}
        temp={data.current.temp_c}
      />

      <MainIcon 
        code={data.current.condition.code}
        isDay={data.current.is_day}
      />

      <WeatherStats 
        wind={data.current.wind_kph}
        humidity={data.current.humidity}
        rain={data.current.precip_mm}
      />
    </div>
  )
}

export default App
