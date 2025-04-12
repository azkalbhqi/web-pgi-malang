// components/NewsDetailCard.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface NewsDetailCardProps {
  title: string;
  body: string;
  date: string;
  author: string;
  imageUrl: string;
}

const NewsDetailCard = ({ title, body, date, author, imageUrl }: NewsDetailCardProps) => {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      {/* Back Button */}
      <button
        aria-label="Kembali ke halaman sebelumnya"
        onClick={() => router.back()}
        className="text-blue-600 hover:underline mb-4 inline-flex items-center gap-1"
      >
        ← Back
      </button>

      {/* Image */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-500 text-sm">By {author} • {date}</p>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{body}</p>
    </div>
  );
};

export default NewsDetailCard;
