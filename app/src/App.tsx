import { useState } from 'react'
import { useWeather } from "./hooks/useWeather"
import MainInfo from "./components/MainInfo"
import MainIcon from "./components/MainIcon"

function App() {
  const { data, loading, error } = useWeather("Tbilisi")

  if (loading)
    return <p>Loading ...</p>
  if (error)
    return <p>Error fetching weather</p>

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-[#112466] to-[#2d2fb3]">
      <MainInfo
        location={data?.location?.name}
        temp={data?.current?.temp_c}
        date={data?.location?.localtime}
      />
      <MainIcon />
    </div>
  )
}

export default App
