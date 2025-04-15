import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}