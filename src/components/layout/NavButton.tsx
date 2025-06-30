interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function NavButton({
  label,
  isActive,
  onClick,
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer transition-colors
        ${isActive ? "text-[#2463eb]" : "text-black"}
      `}
    >
      {label}
    </button>
  );
}
