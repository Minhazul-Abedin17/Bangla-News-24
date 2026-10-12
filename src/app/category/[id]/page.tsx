import NewsCard from "@/components/NewsCard";
interface CType {
    id : string,
     description: string,
  title: string,
  category: string,
  imageUrl: string,
  imageAlt: string
}

const CategoryNews = async ({ params } : {params : {id : string}}) => {
  const { id } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${id}`,
  );
  const data = await res.json();
  const categoryData : CType[]= data.data;
  return (
    <div>
      <h1 className="text-2xl text-red-700 font-bold border-b-2 border-red-600 mb-4 pt-4">
        {data.title}
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {
            categoryData.map(news => <NewsCard key={news.id} news={news}/>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
