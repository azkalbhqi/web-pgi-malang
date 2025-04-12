import fs from "fs";
import path from "path";
import NewsDetailCard from "@/app/utils/news-detail";
import { notFound } from "next/navigation";

interface NewsItem {
  title: string;
  body: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "news.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const news: NewsItem[] = JSON.parse(data);

  return news.map((item) => ({ slug: item.slug }));
}

const NewsDetailPage = async ({ params }: { params: { slug: string } }) => {
  const filePath = path.join(process.cwd(), "news.json");
  const data = fs.readFileSync(filePath, "utf-8");
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
};

export default NewsDetailPage;
