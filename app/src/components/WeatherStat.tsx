import type { ReactNode } from "react";

type WeatherStatProps = {
  icon: ReactNode;
  text: string;
  metric: string;
};

const WeatherStat = ({ icon, text, metric }: WeatherStatProps) => {
  return (
    <div
      className="
      flex flex-col items-center justify-center
      gap-[0.5rem] rounded-2xl bg-card p-[1rem]
      border border-border
    "
    >
      <span className="text-primary text-3xl">{icon}</span>
      <span className="text-sm font-medium text-muted">{text}</span>
      <span className="text-2xl font-semibold">{metric}</span>
    </div>
  );
};

export default WeatherStat;
