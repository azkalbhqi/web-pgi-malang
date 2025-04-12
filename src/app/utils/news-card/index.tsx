import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

const NewsCard = ({ title, date, author, excerpt, imageUrl, slug }: NewsCardProps) => {
  return (
    <Link href={`/news/${slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="relative w-full h-48">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4 space-y-2">
          <p className="text-sm text-gray-500">{date} • {author}</p>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
