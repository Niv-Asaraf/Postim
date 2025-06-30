"use client";
import { useState } from "react";
import Image from "next/image";
import { HomeNavButton, MyPostNavButton } from "@/data/appTexts";
import NavButton from "./NavButton";

export default function Header() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  enum Route {
    Home = "home",
    Posts = "posts",
  }

  return (
    <div className="flex justify-between items-center h-16 text-lg sm:text-xl fixed top-0 left-0 w-full z-1 bg-white shadow">
      <Image
        src="/PostimLogo.png"
        alt="Logo"
        width={120}
        height={120}
        className="pl-6"
      />
      <div className="flex gap-4 pr-9">
        <NavButton
          label={HomeNavButton}
          isActive={activeButton === Route.Home}
          onClick={() => setActiveButton(Route.Home)}
        />
        <NavButton
          label={MyPostNavButton}
          isActive={activeButton === Route.Posts}
          onClick={() => setActiveButton(Route.Posts)}
        />
      </div>
    </div>
  );
}
