
import fs from "fs/promises"; // GUNAKAN fs/promises
import path from "path";
import { notFound } from "next/navigation";
import NewsDetailCard from "@/app/utils/news-detail";

// Interface untuk item berita
interface NewsItem {
  title: string;
  body: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

// Menggunakan async/await untuk mendapatkan data secara asinkron
export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "news.json");
  const data = await fs.readFile(filePath, "utf-8");
  const news: NewsItem[] = JSON.parse(data);

  return news.map((item) => ({
    slug: item.slug,
  }));
}

type Params = { slug: string };

// Default async function to handle dynamic route
export default async function NewsDetailPage({ params }: { params: Promise<Params> }) {
  // Await the params to access its properties
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "public", "news.json");
  const data = await fs.readFile(filePath, "utf-8");
  const news: NewsItem[] = JSON.parse(data);

  // Mencari item yang sesuai dengan slug
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    return notFound(); // Menampilkan halaman not found jika item tidak ditemukan
  }

  return (
    <NewsDetailCard
      title={item.title}
      date={item.date}
      author={item.author}
      body={item.body}
      imageUrl={item.image}
    />
  );
}