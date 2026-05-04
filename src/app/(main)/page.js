import Banner from "@/component/Banner";
import BookNest from "@/component/BookNest";
import FeaturedBooks from "@/component/FeaturedBooks";
import MarqueePage from "@/component/Marquee";


export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <MarqueePage></MarqueePage>
      <FeaturedBooks></FeaturedBooks>
      <BookNest></BookNest>
    </div>
  );
}
