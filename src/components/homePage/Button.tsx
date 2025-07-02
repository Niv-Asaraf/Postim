import { ButtonTypes } from "@/data/appConstants";

interface ButtonProps {
  type?: ButtonTypes.PRIMARY | ButtonTypes.TRANSPARENT;
  label: string;
  className?: string;
  onClick?: () => void;
}
const typeClasses = {
  primary: "bg-[#2463eb] text-white",
  transparent:
    "bg-transparent text-black hover:bg-[#2463eb] hover:text-white transition-colors duration-300 ease-in-out",
};
export default function Button({
  type = ButtonTypes.PRIMARY,
  label,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button onClick={onClick} className={`${typeClasses[type]} ${className}`}>
      {label}
    </button>
  );
}
