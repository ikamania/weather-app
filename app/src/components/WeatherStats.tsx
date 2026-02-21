import WeatherStat from "./WeatherStat"
import { WiStrongWind, WiHumidity, WiRaindrop} from "react-icons/wi"

type WeatherStatsProps = {
  wind:  string;
  humidity: string;
  rain: string;
}

const WeatherStats = ({ wind, humidity, rain }: WeatherStatsProps) => {
  return (
    <div className="flex justify-center text-[2.7rem] font-mont ">
      <div 
        className="
          flex justify-center gap-[2rem] leading-[2rem] p-3
          border-1 rounded-[1.1rem] border-gray-500 shadow-md
        "
      >
        <WeatherStat
          icon={<WiStrongWind />}
          text={wind}
          metric="m/s"
        />
        <WeatherStat
          icon={<WiHumidity />}
          text={humidity}
          metric="%"
        />
        <WeatherStat
          icon={<WiRaindrop/>}
          text={rain}
          metric="%"
        />
      </div>
    </div>
  )
}

export default WeatherStats
