import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  description: string;
  title: string;
  categories: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  if (!news || news.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
        <p className="font-semibold text-gray-500">কোনো সংবাদ পাওয়া যায়নি।</p>
      </div>
    );
  }

  const firstNews = news[0];
  const otherNews = news.slice(1, 5);
  const toBanglaNumber = (number: number) => {
    return number
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
  };

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="mb-5 flex items-center justify-between border-b-2 border-red-600 pb-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            প্রধান সংবাদ
          </h2>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            সর্বশেষ গুরুত্বপূর্ণ খবরগুলো এক নজরে
          </p>
        </div>

        <Link
          href="/"
          className="hidden text-sm font-semibold text-red-600 transition hover:text-red-800 sm:block"
        >
          সব সংবাদ →
        </Link>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {/* Main News */}
        <Link href={`/news/${firstNews.id}`} className="group lg:col-span-3">
          <article className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={firstNews.imageUrl}
                alt={firstNews.imageAlt || firstNews.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              {/* Category */}
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                  {firstNews.categories}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              <h3 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-red-600 sm:text-2xl">
                {firstNews.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                {firstNews.description}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-semibold text-gray-400">
                  বিস্তারিত পড়ুন
                </span>

                <span className="text-lg font-bold text-red-600 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </article>
        </Link>

        {/* Side News */}
        <div className="flex flex-col gap-3 lg:col-span-2">
          {otherNews.map((item, index) => (
            <Link href={`/news/${item.id}`} key={item.id} className="group">
              <article className="flex min-h-24 gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:border-red-200 hover:bg-red-50/30 hover:shadow-md sm:min-h-28">
                {/* Number */}
                {/* Number */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-sm font-bold text-red-600">
                  {toBanglaNumber(index + 1)}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-bold text-red-600">
                    {item.categories}
                  </p>

                  <h3 className="line-clamp-3 text-sm font-bold leading-5 text-gray-800 transition-colors group-hover:text-red-600 sm:text-base">
                    {item.title}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="flex shrink-0 items-center text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-red-500">
                  →
                </div>
              </article>
            </Link>
          ))}

          {/* Mobile / Tablet More Link */}
          <Link
            href="/"
            className="mt-1 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-bold text-red-600 transition hover:bg-red-600 hover:text-white sm:hidden"
          >
            সব সংবাদ দেখুন →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
