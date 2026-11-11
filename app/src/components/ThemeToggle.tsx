import { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4, WiDaySunny } from "react-icons/wi";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="
        flex items-center justify-center
        size-10 rounded-full fixed top-[1rem] right-[1rem]
        bg-card border border-border
      "
    >
      {isDark ? (
        <WiDaySunny size={24} />
      ) : (
        <WiMoonAltWaningCrescent4 size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
