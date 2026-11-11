import {
  WiDaySunny,
  WiNightClear,
  WiCloudy,
  WiNightAltCloudy,
  WiFog,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

export function getWeatherIcon(code?: number, isDay?: boolean) {
  if (code === undefined) return <WiDaySunny />;

  if (code === 1000) return isDay ? <WiDaySunny /> : <WiNightClear />;
  if (code >= 1003 && code <= 1009)
    return isDay ? <WiCloudy /> : <WiNightAltCloudy />;
  if ([1030, 1135, 1147].includes(code)) return <WiFog />;
  if (code >= 1180 && code <= 1201) return <WiRain />;
  if (code >= 1210 && code <= 1225) return <WiSnow />;
  if (code >= 1273 && code <= 1282) return <WiThunderstorm />;

  return isDay ? <WiDaySunny /> : <WiNightClear />;
}

type MainIconProps = {
  code?: number;
  isDay: boolean;
};

const MainIcon = ({ code, isDay }: MainIconProps) => {
  const icon = getWeatherIcon(code, isDay);

  return (
    <div
      className="
      flex items-center justify-center
      size-48 sm:size-56 mx-auto
      rounded-full border border-border
      bg-card
      text-primary
      text-[10rem]
    "
    >
      {icon}
    </div>
  );
};

export default MainIcon;
