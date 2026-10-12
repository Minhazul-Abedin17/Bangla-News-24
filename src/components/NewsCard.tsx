
import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  description: string;
  title: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`} className="group block h-full">
      <article className="h-full overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
        
        {/* Image */}
        <figure className="relative h-52 sm:h-56 md:h-60 overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </figure>

        {/* Content */}
        <div className="p-4 sm:p-5">
          
          {/* Category */}
          <p className="mb-2 text-sm font-bold text-red-600">
            {news.category}
          </p>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold leading-7 text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
            {news.title}
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm sm:text-base leading-6 text-gray-500 line-clamp-2">
            {news.description}
          </p>

          {/* Read More */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-500 group-hover:text-red-600 transition">
              বিস্তারিত পড়ুন
            </span>

            <span className="text-lg text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-200">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
