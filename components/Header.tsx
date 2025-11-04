import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex gap-6">
        <Link href={"/"} className="hover:text-gray-300">
          Home
        </Link>
        <Link href={"/gallery"} className="hover:text-gray-300">
          Gallery
        </Link>
        <Link href={"/about"} className="hover:text-gray-300">
          About
        </Link>
      </div>
    </nav>
  );
}