import { BookOpen, ShieldCheck, Smartphone, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import bannerImage from '@/assets/banner2.png'


const BookNest = () => {
  const data = {
    features: [
      {
        id: 1,
        title: "Vast Collection",
        description: "Thousands of books across various genres and categories.",
        image_url:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
        alt_text: "Large library with many bookshelves",
        icon: <BookOpen className="w-5 h-5 text-white" />,
      },
      {
        id: 2,
        title: "Read Anywhere",
        description: "Enjoy your favorite books anytime, anywhere.",
        image_url:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000",
        alt_text: "Person reading on an e-reader",
        icon: <Smartphone className="w-5 h-5 text-white" />,
      },
      {
        id: 3,
        title: "Curated for You",
        description: "Expert picks and personalized recommendations.",
        image_url:
          "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1000",
        alt_text: "Open book on a wooden table",
        icon: <ShieldCheck className="w-5 h-5 text-white" />,
      },
      {
        id: 4,
        title: "Community",
        description: "Join a community of book lovers and share your thoughts.",
        image_url:
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1000",
        alt_text: "Group of people discussing books",
        icon: <UserRound className="w-5 h-5 text-white" />,
      },
    ],
  };

  return (
    <div className="bg-[#f2efeb]">
      <div className=" mt-20 w-full relative">
        <div className="container mx-auto pt-10 ">
          <h1 className="text-2xl font-bold text-center">
            Why Readers Choose BookNest
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 mt-5">
            {data.features.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="card h-full">
                  <figure className="px-10 pt-10 ">
                    <Image
                      src={item.image_url}
                      alt={item.alt_text}
                      width={400}
                      height={400}
                      className="rounded-2xl h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                    ></Image>
                  </figure>
                  {/* Icon */}
                  <div className="absolute bottom-25 left-1/2 -translate-x-1/2 bg-amber-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 pb-10">
        <div className="">
            <Image src={bannerImage} alt="" className="h-100 rounded-2xl"></Image>
        </div>
      </div>
    </div>
  );
};

export default BookNest;
