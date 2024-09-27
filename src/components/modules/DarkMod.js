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
      className=" fixed bottom-5 left-5 "
    >
      {!isDark ? <FaRegMoon size={35} /> : <IoSunnyOutline size={35} color="#ffffff" />}
    </button>
  );
}

export default DarkMod;
