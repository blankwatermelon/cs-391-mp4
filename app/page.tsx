import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">
          Harvard Art Museums Explorer
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover masterpieces from one of the world's most prestigious art collections
        </p>
        <Link
          href={"/gallery"}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Explore Gallery
        </Link>
      </div>
    </main>
  );
}