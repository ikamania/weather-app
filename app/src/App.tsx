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
  console.log(data)
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-[#112466] to-[#2d2fb3]">
      <MainInfo
        location={data?.location?.name}
        date={data?.location?.localtime}
        temp={data?.current?.temp_c}
      />
      <MainIcon 
        condition={data?.current?.condition?.text}
      />
    </div>
  )
}

export default App
