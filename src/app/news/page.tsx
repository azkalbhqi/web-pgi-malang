import fs from "fs";
import path from "path";
import NewsCard from "@/app/utils/news-card";

interface NewsItem {
  title: string;
  body: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

const NewsPage = async () => {
  const filePath = path.join(process.cwd(), "news.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const news: NewsItem[] = JSON.parse(data);

  return (
    <>
        <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Berita Terbaru</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
            <NewsCard
                key={index}
                title={item.title}
                date={item.date}
                author={item.author}
                excerpt={item.body.substring(0, 50) + "..."}
                imageUrl={item.image}
                slug={item.slug}
            />
            ))}
        </div>
        </div>
    </>
  );
};

export default NewsPage;
