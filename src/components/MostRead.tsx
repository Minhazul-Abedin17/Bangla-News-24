
import Link from "next/link";

interface MostRead {
  id: string;
  title: string;
}

const bengaliNumbers = ["১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "১০"];

const MostRead = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read"
  );

  const data = await res.json();
  const news: MostRead[] = data.data;

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      
      {/* Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-gray-200 flex items-center gap-2">
        <span className="w-1 h-6 bg-red-600 rounded-full"></span>

        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          সর্বাধিক পঠিত
        </h2>
      </div>

      {/* News List */}
      <div>
        {news.map((n, i) => (
          <Link
            key={n.id}
            href={`/news/${n.id}`}
            className="group flex items-start gap-3 px-4 sm:px-5 py-3.5 border-b border-gray-100 last:border-b-0 hover:bg-red-50 transition duration-200"
          >
            {/* Bengali Number */}
            <span className="w-8 sm:w-9 flex-shrink-0 text-xl sm:text-2xl font-bold text-red-500 leading-6">
              {bengaliNumbers[i]}
            </span>

            {/* Title */}
            <p className="flex-1 text-sm sm:text-base leading-6 text-gray-700 font-medium group-hover:text-red-600 transition">
              {n.title}
            </p>

            {/* Arrow */}
            <span className="text-gray-300 group-hover:text-red-500 transition text-lg">
              ›
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
