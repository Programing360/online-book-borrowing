import { allBooksData } from "@/lib/data";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const AllBooksPage = async () => {
  const data = await allBooksData();

    const handleSearchInput = (e) =>{
        console.log(e);
    }


  return (
    <div className="container mx-auto mt-14">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Featured Books</h1>
          <p>Handpicked top reads just for you.</p>
        </div>
        <label className="input outline-0">
          <Search />
          <input
            type="search"
            required
            placeholder="Search"
            
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-2">
        {data.map((book) => (
          <div key={book.id}>
            <div className="card bg-base-100  shadow-2xl">
              <figure className="">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={400}
                  height={400}
                  className="h-[200px]"
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

export default AllBooksPage;
