import fs from "fs/promises"; // GUNAKAN fs/promises
import path from "path";
import { notFound } from "next/navigation";
import NewsDetailCard from "@/app/utils/news-detail";

interface NewsItem {
  title: string;
  body: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

export async function generateStaticParams() {
  // Mengambil data dari file news.json di folder public
  const filePath = path.join(process.cwd(), "public", "news.json");
  const data = await fs.readFile(filePath, "utf-8");
  const news: NewsItem[] = JSON.parse(data);

  // Return slugs untuk generateStaticPaths
  return news.map((item) => ({
    slug: item.slug,
  }));
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function NewsDetailPage({ params }: PageProps) {
  // Mengambil data dari file news.json di folder public
  const filePath = path.join(process.cwd(), "public", "news.json");
  const data = await fs.readFile(filePath, "utf-8");
  const news: NewsItem[] = JSON.parse(data);

  const item = news.find((n) => n.slug === params.slug);

  if (!item) return notFound();

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
