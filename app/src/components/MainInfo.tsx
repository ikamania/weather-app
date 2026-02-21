function formatDate(dateString?: string) {
  if (!dateString) 
    return ""

  const date = new Date(dateString)

  if (isNaN(date.getTime())) 
    return ""

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date)
}

type MainInfoProps = {
  location: string;
  temp: string;
  date: string;
}

const MainInfo = ({location, temp, date}: MainInfoProps) => {
  const dateFormated = formatDate(date)

  return (
    <div className="w-full flex justify-center p-[1.5rem]">
      <div className="font-mont leading-[1]">
        <div className="text-white text-[4rem] flex flex-col items-center">
          <p>{location}</p>
          <p className="text-[3.5rem]">{temp}°</p>

          <div className="text-gray-500 font-medium text-[1.2rem] mt-[.6rem]">
            <p>{dateFormated}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainInfo
