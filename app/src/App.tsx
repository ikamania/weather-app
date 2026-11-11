import { useWeather } from "./hooks/useWeather";
import MainInfo from "./components/MainInfo";
import MainIcon from "./components/MainIcon";
import WeatherStats from "./components/WeatherStats";
import Loading from "./components/Loading";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { data, error } = useWeather("Tbilisi");

  if (!data) return <Loading />;
  if (error) return <h1>something went wrong.</h1>;

  return (
    <div className="min-h-screen">
      <ThemeToggle />

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
  );
}

export default App;
