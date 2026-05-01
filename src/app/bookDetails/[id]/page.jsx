// 'use client'
import BookDetailsButton from "@/component/shered/BookDetailsButton";
import { allBooksId } from "@/lib/data";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

const BookDetails = async ({ params }) => {
  const { id } = await params;
//   const bookDetails = await fetch(`http://localhost:5000/Data/${id}`);
//   const bookDetails = await bookDetails.json();
  const bookDetails = await allBooksId(id)
  console.log(bookDetails);
  return (
    <div className="container mx-auto md:mt-20">
      <div className=" flex flex-col md:flex-row justify-center gap-8 shadow-2xl p-4 rounded-2xl">
        <div className="">
          <Image
            src={bookDetails.image_url}
            alt=""
            width={600}
            height={300}
            className=" rounded-2xl p-2 shadow-2xl h-[400px] md:h-[500px] "
          ></Image>
        </div>
        <div className="md:w-[500px] p-4">
          <h1 className="text-4xl font-bold">{bookDetails.title}</h1>
          <p className="">
            by{" "}
            <span className="font-semibold" style={{ color: "#ddb159" }}>
              {bookDetails.author}
            </span>
          </p>
          <hr className="my-4 text-gray-500 " style={{ color: "#edeae6" }} />

          <div className="flex gap-8 leading-8">
            <div>
              <h1 className="font-bold">Publisher: </h1>
              <h1 className="font-bold">Published Year:</h1>
              <h1 className="font-bold">Category: </h1>
              <h1 className="font-bold">Language: </h1>
              <h1 className="font-bold">Available Copies:</h1>
            </div>
            <div>
              <p className="font-semibold text-gray-600">{bookDetails.publisher}</p>
              <p className="font-semibold text-gray-600">{bookDetails.published_year}</p>
              <p className="font-semibold text-gray-600">{bookDetails.category}</p>
              <p className="font-semibold text-gray-600">{bookDetails.language}</p>
              <p className="font-semibold text-[#d2aa56]">{bookDetails.available_quantity} copies left</p>
            </div>
          </div>
          <hr className="mt-4 text-gray-500 " style={{ color: "#edeae6" }} />
          <div className="py-6">
            <h1 className="text-2xl font-bold">About the Book</h1>
            <p className="">{bookDetails.description}</p>
          </div>
          
          <BookDetailsButton bookDetails={bookDetails}></BookDetailsButton>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
