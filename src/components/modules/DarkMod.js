"use client";
import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
function DarkMod() {
  const [isDark, setIsDark] = useState(false);
  return (
    <button
      onClick={() => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
      }}
      className=" fixed bottom-5 left-3 z-20 dark:bg-neutral-800   bg-neutral-200 rounded-md p-1"
    >
      {!isDark ? <FaRegMoon size={35} className="animate-rotate-but text-neutral-800"/> : <IoSunnyOutline size={35} color="#ffffff" className="animate-rotate-but text-neutral-100" />}
    </button>
  );
}

export default DarkMod;
