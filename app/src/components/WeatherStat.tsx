type WeatherStatProps = {
  icon: JSX.Element;
  text: string;
  metric: string;
}

const WeatherStat = ({ icon, text, metric }: WeatherStatProps) => {
  return (
    <div className="flex flex-col items-center text-gray-300 font-medium gap-1">
      {icon}
      <span>
        {text}
        <span className="ml-1 text-[1.5rem] font-bold text-gray-600">{metric}</span>
      </span>
    </div>
  )
}

export default WeatherStat
