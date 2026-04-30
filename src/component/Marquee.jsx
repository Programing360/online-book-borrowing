import { allBooksData } from "@/lib/data";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueePage = async () => {
  const data = await allBooksData();
  //   console.log(data);

  return (
    <div className="container mx-auto">
      <section>
        <div className="flex items-center bg-[#281911] text-white py-5 px-4 overflow-hidden">
          <button className="bg-white text-amber-800 px-4 py-2 rounded-md font-semibold whitespace-nowrap">
            New Arrivals:
          </button>
          <div className="flex-1 ml-4">
            <Marquee speed={60} gradient={false}>
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-16 pl-4 text-yellow-300 font-semibold text-lg"
                >
                  <p>{item.title} |</p>
                </div>
              ))}{" "}
              <p className="text-yellow-300 font-semibold text-lg">
                Special Discount on Memberships...
              </p>
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarqueePage;
