import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-16">
      <Image
        src="/PostimLogo.png"
        alt="Logo"
        width={100}
        height={70}
        className="pl-6"
      />
      <div className="flex gap-4 pr-9">
        <button>Home</button>
        <button>My Posts </button>
      </div>
    </div>
  );
}
