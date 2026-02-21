import {
  WiDaySunny,
  WiCloudy,
  WiFog,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi"

type MainIconProps = {
  code?: number;
}

export function getWeatherIcon(code: number) {
  if (code === 1000) return <WiDaySunny />
  if (code >= 1003 && code <= 1009) return <WiCloudy />
  if ([1030, 1135, 1147].includes(code)) return <WiFog />
  if (code >= 1180 && code <= 1201) return <WiRain />
  if (code >= 1210 && code <= 1225) return <WiSnow />
  if (code >= 1273 && code <= 1282) return <WiThunderstorm />

  return <WiDaySunny />
}

const MainIcon = ({ code }: MainIconProps) => {
  const icon = getWeatherIcon(code)

  return (
    <div className="flex justify-center text-white text-[13rem]">
      {icon}
    </div>
  )
}

export default MainIcon
