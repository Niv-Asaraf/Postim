import {
  HERO_IMAGE_ALT,
  SEARCH_BUTTON_LABEL,
  SEARCH_INPUT_PLACEHOLDER,
} from "@/data/appTexts";
import Image from "next/image";
import Button from "./Button";
import { ButtonTypes } from "@/data/appConstants";

export default function Search() {
  return (
    <div className="border w-full h-[35vh] relative">
      <Image
        src="/SearchHero.png"
        alt={HERO_IMAGE_ALT}
        className="bg-cover"
        fill
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex justify-center items-center gap-4 bg-white/40 rounded-3xl px-2 pt-10 pb-6 sm:pt-12,pb-8 w-[70%] md:w-[60%] lg:w-[50%]">
          <input
            type="text"
            className="px-3 py-1.5 rounded-md bg-white color-gray w-[80%] text-xs sm:text-sm lg:text-base lg:w-[85%]"
            placeholder={SEARCH_INPUT_PLACEHOLDER}
          />
          <Button
            type={ButtonTypes.PRIMARY}
            label={SEARCH_BUTTON_LABEL}
            className="bg-[#2463eb] text-white px-2 py-1.5 rounded-md text-xs w-14 sm:w-18 sm:text-sm lg:text-base"
          />
        </div>
      </div>
    </div>
  );
}
