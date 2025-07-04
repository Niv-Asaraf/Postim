"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavButtonProps {
  label: string;
  href: string;
  onClick?: () => void;
}

export default function NavButton({ label, href, onClick }: NavButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className={`cursor-pointer transition-colors
        ${isActive ? "text-[#2463eb]" : "text-black"}
      `}
      >
        {label}
      </button>
    </Link>
  );
}
