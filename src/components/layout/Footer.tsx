import { PolicyButton, RightsReserved, TermsButton } from "@/data/appTexts";

export default function Footer() {
  return (
    <div className="flex justify-between items-center h-14 bg-white text-md sm:text-lg">
      <footer className="pl-4">{RightsReserved}</footer>
      <div className="flex gap-1 text-blue-500 pr-4 sm:pr-6 gap-6">
        <button className="cursor-pointer">{PolicyButton}</button>
        <button className="cursor-pointer">{TermsButton}</button>
      </div>
    </div>
  );
}
