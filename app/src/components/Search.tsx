import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

interface SearchProps {
  onSelect: (location: string) => void;
}

const Search = ({ onSelect }: SearchProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const searchLocation = async (value: string) => {
    setQuery(value);

    if (value.length < 2) {
      setResults([]);
      return;
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${encodeURIComponent(value)}`,
    );

    const data = await response.json();
    setResults(data);
  };

  return (
    <div className="absolute top-[1rem] left-[1rem] flex items-center gap-[0.5rem]">
      <FiSearch size={20} />

      <div className="relative">
        <input
          type="text"
          placeholder="Search city or country"
          value={query}
          onChange={(e) => searchLocation(e.target.value)}
          className="w-[13rem] border-none outline-none focus:outline-none focus:ring-0"
        />

        {results.length > 0 && (
          <ul className="absolute left-0 top-full mt-[0.1rem]">
            {results.map((location) => (
              <li
                key={location.id}
                onClick={() => {
                  setQuery("");
                  setResults([]);
                  onSelect(`${location.lat},${location.lon}`);
                }}
                className="cursor-pointer px-[0.1rem] py-[0.1rem]"
              >
                {location.name}, {location.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
