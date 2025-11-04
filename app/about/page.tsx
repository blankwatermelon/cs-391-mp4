export default function AboutPage() {
  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About This Project</h1>
      
      <div className="space-y-4 text-gray-700">
        <p>
          This project showcases artwork from the Harvard Art Museums collection
          using their public API.
        </p>
        
        <p>
          The Harvard Art Museums house approximately 250,000 objects in three
          facilities: the Fogg Museum, the Busch-Reisinger Museum, and the
          Arthur M. Sackler Museum.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Browse artwork from Harvard's collection</li>
          <li>View high-quality images</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Source</h2>
        <p>
          All artwork data is provided by the{' '}
          <a
            href="https://harvardartmuseums.org"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harvard Art Museums API
          </a>
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Technical Details</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Built with Next.js 14 and TypeScript</li>
          <li>Server-side API key protection</li>
          <li>Client-side rendering with React</li>
          <li>Responsive design with Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}