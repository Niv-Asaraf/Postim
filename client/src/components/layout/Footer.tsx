import { POLICY_BUTTON, RIGHTS_RESERVED, TERMS_BUTTON } from "@/data/appTexts";

export default function Footer() {
  return (
    <div className="flex justify-between items-center h-14 bg-white shadow text-md sm:text-lg">
      <footer className="pl-4">{RIGHTS_RESERVED}</footer>
      <div className="flex gap-6 text-[#2463eb] pr-4 sm:pr-6">
        <button className="cursor-pointer">{POLICY_BUTTON}</button>
        <button className="cursor-pointer">{TERMS_BUTTON}</button>
      </div>
    </div>
  );
}
