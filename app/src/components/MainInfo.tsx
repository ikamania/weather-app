function formatDate(dateString?: string) {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

type MainInfoProps = {
  location: string;
  temp: string;
  date: string;
};

const MainInfo = ({ location, temp, date }: MainInfoProps) => {
  const dateFormated = formatDate(date);

  return (
    <div className="text-center gap-[0.5rem] py-[2rem]">
      <p className="text-2xl font-semibold tracking-tight text-muted">
        {location}
      </p>

      <p className="text-[6rem] sm:text-[8rem] leading-none font-light tracking-tighter text-primary">
        {temp}°
      </p>

      <p className="font-medium text-muted">{dateFormated}</p>
    </div>
  );
};

export default MainInfo;
