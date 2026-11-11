import { useWeather } from "./hooks/useWeather";
import MainInfo from "./components/MainInfo";
import MainIcon from "./components/MainIcon";
import WeatherStats from "./components/WeatherStats";
import Loading from "./components/Loading";
import ThemeToggle from "./components/ThemeToggle";
import { useEffect, useState } from "react";
import Search from "./components/Search";

function App() {
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLocation(`${coords.latitude},${coords.longitude}`);
    });
  }, []);

  const { data, error } = useWeather(location ?? "Tbilisi");

  if (!data) return <Loading />;
  if (error) return <h1>something went wrong.</h1>;

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Search onSelect={setLocation} />

      <MainInfo
        location={data.location.region}
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
