// components/GalleryCard.tsx
import Image from "next/image";

interface GalleryCardProps {
  imageUrl: string;
  title: string;
}

const GalleryCard = ({ imageUrl, title }: GalleryCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <div className="w-full h-60 relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Overlay title */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold text-center px-2">{title}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
