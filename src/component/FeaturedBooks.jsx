import { useSession } from "@/lib/auth-client";
import { allBooksData } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedBooks = async () => {
  const bookData = await allBooksData();
    
  return (
    <div className="container mx-auto mt-14">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Featured Books</h1>
          <p>Handpicked top reads just for you.</p>
        </div>
        <div>
          <Link href={'/all-books'}>
            <button className="btn rounded-xl ">
              View All Books <ArrowRight></ArrowRight>
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-2">
        {bookData.slice(0, 4).map((book) => (
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
              <div className="card-body w-full items-center text-center">
                <h2 className="card-title">{book.title}</h2>
                <p className="font-semibold">{book.author}</p>
                <p className="line-clamp-2">{book.description}</p>
                <div className="flex justify-center">
                  <Link href={`/bookDetails/${book.id}`}>
                    <button className="btn bg-[#403229] w-full text-white rounded-full active:scale-95">
                      View Details
                    </button>
                  </Link>
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
