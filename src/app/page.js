import Banner from "@/component/Banner";
import FeaturedBooks from "@/component/FeaturedBooks";
import MarqueePage from "@/component/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <MarqueePage></MarqueePage>
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
}
