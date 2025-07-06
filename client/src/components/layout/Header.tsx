import Image from "next/image";
import {
  HOME_NAV_BUTTON,
  LOGO_IMAGE_ALT,
  MY_POSTS_NAV_BUTTON,
} from "@/data/appTexts";
import NavButton from "./NavButton";
import { Route } from "@/data/appConstants";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-16 text-lg sm:text-xl fixed top-0 left-0 w-full z-1 bg-white shadow">
      <Image
        src="/PostimLogo.png"
        alt={LOGO_IMAGE_ALT}
        width={120}
        height={120}
        className="pl-6"
      />
      <div className="flex gap-4 pr-9">
        <NavButton label={HOME_NAV_BUTTON} href={Route.HOME} />
        <NavButton label={MY_POSTS_NAV_BUTTON} href={""} />
      </div>
    </div>
  );
}
