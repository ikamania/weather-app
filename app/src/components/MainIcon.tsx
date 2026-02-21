import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi"


type MainIconProps = {
  condition?: string;
}

const iconMap: Record<string, JSX.Element> = {
  Sunny: <WiDaySunny />,
  Cloudy: <WiCloudy />,
  Rain: <WiRain />,
}

const MainIcon = ({ condition }: MainIconProps) => {
  const icon = iconMap[condition]

  return (
    <div className="flex justify-center text-white text-[13rem]">
      {icon}
    </div>
  )
}

export default MainIcon
