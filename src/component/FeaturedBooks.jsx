import { allBooksData } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const FeaturedBooks = async () => {
  const data = await allBooksData();
  return (
    <div className="container mx-auto mt-14">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Featured Books</h1>
          <p>Handpicked top reads just for you.</p>
        </div>
        <div>
            
          <button className="btn rounded-xl ">View All Books <ArrowRight></ArrowRight></button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        {data.slice(0,4).map((book) => (
          <div key={book.id}>
            <div className="card bg-base-100  shadow-2xl">
              <figure className="">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={400}
                  height={400}
                ></Image>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{book.title}</h2>
                <p className="font-semibold">{book.author}</p>
                <p>{book.description}</p>
                <div className="card-actions w-full">
                  <button className="btn bg-[#403229] w-full text-white rounded-full active:scale-95">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
