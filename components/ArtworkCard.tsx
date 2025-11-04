import { HarvardObject } from '@/types/types';

interface ArtworkCardProps {
  artwork: HarvardObject;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
      {artwork.primaryimageurl ? (
        <img
          src={artwork.primaryimageurl}
          alt={artwork.title || 'Artwork'}
          className="w-full h-150 object-cover "
        />
      ) : (
        <div className="h-150 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">No image available</p>
        </div>
      )}
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-black">
          {artwork.title || 'Untitled'}
        </h3>
        
        {artwork.people && artwork.people.length > 0 && (
          <p className="text-gray-700 mb-1">{artwork.people[0].name}</p>
        )}
        
        {artwork.dated && (
          <p className="text-gray-600 text-sm mb-1">{artwork.dated}</p>
        )}
        
        {artwork.classification && (
          <p className="text-gray-600 text-sm">{artwork.classification}</p>
        )}
      </div>
    </div>
  );
}