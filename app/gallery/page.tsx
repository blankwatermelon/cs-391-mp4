// app/gallery/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { HarvardAPIResponse } from '@/types/types';
import ArtworkCard from '@/components/ArtworkCard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function GalleryPage() {
  const [data, setData] = useState<HarvardAPIResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/artworks');
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch artworks');
      }
      
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Art Gallery</h1>
      
      {/* Loading State */}
      {loading && <LoadingSpinner />}
      
      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={fetchArtworks}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
      
      {/* Data Display */}
      {!loading && !error && data && (
        <>
          <p className="text-gray-600 mb-6 text-center">
            Displaying {data.records.length} artworks
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.records.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}