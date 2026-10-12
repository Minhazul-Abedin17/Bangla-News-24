
import CategoryNews from "@/app/category/[id]/page";
import NotFound from "@/app/not-found";
import Image from "next/image";

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );

  const data = await res.json();
  const news = data.data;
  if(!news){
   return <NotFound/>
  }

  return (
    <div className="w-full px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12 py-5 sm:py-7 md:py-10">
      <article className="max-w-6xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">

        {/* News Header */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-10">
          <p className="text-xs sm:text-sm font-semibold text-red-600 uppercase tracking-wide mb-2 sm:mb-3">
            {news.source}
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            {news.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-5 pb-5 sm:pb-6 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
            <p>Published: {news.firstPublished}</p>
            <p>Updated: {news.lastPublished}</p>
          </div>
        </div>

        {/* News Image */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-5 sm:pt-6">
          <div className="overflow-hidden rounded-lg sm:rounded-xl">
            <Image
              width={1200}
              height={700}
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>

        {/* News Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
          <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 md:leading-9 text-gray-700 whitespace-pre-line">
            {news.text}
          </p>
        </div>

      </article>
    </div>
  );
};

export default NewsDetails;

