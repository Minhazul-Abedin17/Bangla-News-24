import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
interface HeadLines{
    id : string,
    title : string
}
const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=15");
  const data = await res.json();
  const headlines : HeadLines[] = data.data;
  return (
    <div>
      <div className="flex">
        <span className="bg-red-800 py-1 px-5 text-center text-white font-bold flex items-center justify-center">
          সর্বশেষ
        </span>
        <MarqueeText
          className="bg-red-600 py-1 px-5 text-white font-bold"
          direction="right"
          duration={14}
        >
          {headlines.map(h => 
            <Link className="hover:underline" href={`/news/${h.id}`} key={h.id}>
              <span key={h.id}>
              <span>{h.title}</span>
              <span className="mx-2">◉</span>
            </span>
            </Link>
          )}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
