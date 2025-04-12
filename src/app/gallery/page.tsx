// app/gallery/page.tsx
import fs from "fs";
import path from "path";
import GalleryCard from "@/app/utils/gallery-card";

interface GalleryItem {
  imageUrl: string;
  title: string;
}

const GalleryPage = async () => {
  const filePath = path.join(process.cwd(), "gallery.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const gallery: GalleryItem[] = JSON.parse(data);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Galeri PGI Malang</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((item, index) => (
          <GalleryCard key={index} imageUrl={item.imageUrl} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
