"use client";
import { useState } from "react";
import Image from "next/image";
import { HomeNavButton, MyPostNavButton } from "@/data/appTexts";

export default function Header() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  return (
    <div className="flex justify-between items-center h-16 text-lg sm:text-xl">
      <Image
        src="/PostimLogo.png"
        alt="Logo"
        width={100}
        height={100}
        className="pl-6"
      />
      <div className="flex gap-4 pr-9">
        <button
          onClick={() => setActiveButton("Home")}
          className={`${
            activeButton === "Home" ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        >
          {HomeNavButton}
        </button>
        <button
          onClick={() => setActiveButton("Posts")}
          className={`${
            activeButton === "Posts" ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        >
          {MyPostNavButton}
        </button>
      </div>
    </div>
  );
}
