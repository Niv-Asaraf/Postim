export default function Footer() {
  return (
    <div className="flex justify-between items-center h-14 border">
      <footer className="pl-4">© 2023 PostCreator. All rights reserved.</footer>
      <div className="flex gap-4 text-blue-400 pr-4">
        <button>Privacy Policy</button>
        <button>Terms of Service</button>
      </div>
    </div>
  );
}
