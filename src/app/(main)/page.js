import Banner from "@/component/Banner";
import BookNest from "@/component/BookNest";
import FeaturedBooks from "@/component/FeaturedBooks";
import Footer from "@/component/Footer";
import MarqueePage from "@/component/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <MarqueePage></MarqueePage>
      <FeaturedBooks></FeaturedBooks>
      <BookNest></BookNest>
      {/* <Footer></Footer> */}
    </div>
  );
}
