import { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4, WiDaySunny } from "react-icons/wi";

const ThemeToggle = () => {
  const [isLight, setIsLigth] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <button
      onClick={() => setIsLigth((prev) => !prev)}
      className="
        flex items-center justify-center
        size-10 rounded-full fixed top-[1rem] right-[1rem]
        bg-card border border-border
      "
    >
      {isLight ? (
        <WiDaySunny size={24} />
      ) : (
        <WiMoonAltWaningCrescent4 size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
