"use client";
import 'animate.css';
import { useSession } from "@/lib/auth-client";
import {
  BookOpen,
  BookOpenText,
  BookUser,
  BriefcaseBusiness,
  ChartBarStacked,
  ClipboardClock,
  Cpu,
  FlaskConical,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AllBooksCart = ({ booksData }) => {
  const [searchText, setSearchText] = useState("");
  const [filterBooks, setFilterBooks] = useState(booksData);
  const { data } = useSession();
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterBooksData = (category) => {
    setSelectedCategory(category);

    if (category.toLowerCase() === "all") {
      setFilterBooks(booksData);
    } else {
      const filterData = booksData.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase(),
      );

      setFilterBooks(filterData);
    }
  };
  const handleSearchInput = (e) => {
    e.preventDefault();

    const matchBookData = booksData.filter((book) =>
      book.title.toLowerCase().trim().includes(searchText.toLowerCase().trim()),
    );
    return setFilterBooks(matchBookData);
  };

  return (
    <div className="grid md:grid-cols-12 gap-4 lg:container mx-auto">
      {/* category for lg */}
      <div data-aos="fade-right" suppressHydrationWarning className="bg-[#faf6ef] md:h-[800px] p-3 md:col-span-2 rounded-2xl hidden lg:block ">
        <h1 className="text-2xl font-bold mb-4 w-full flex items-center gap-2">
          <ChartBarStacked /> Categories
        </h1>
        <div className="leading-10 text-start">
          <button
            onClick={() => filterBooksData("all")}
            className={`font-bold w-full text-left rounded-xl transition-all duration-300 flex items-center gap-2 mb-2 px-2 
           ${
             selectedCategory === "all"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <BookOpen /> All Books
            <span className="text-end">({filterBooks.length})</span>
          </button>
          <button
            onClick={() => filterBooksData("story")}
            className={`font-bold w-full text-left rounded-xl transition-all duration-300 flex items-center gap-2 mb-2 px-2
           ${
             selectedCategory === "story"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <BookOpenText /> Story
          </button>
          <button
            onClick={() => filterBooksData("tech")}
            className={`font-bold w-full text-left rounded-xl transition-all duration-300 flex items-center gap-2 mb-2 px-2 
           ${
             selectedCategory === "tech"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <Cpu /> Tech
          </button>
          <button
            onClick={() => filterBooksData("science")}
            className={`font-bold w-full text-left rounded-xl transition-all duration-300 flex items-center gap-2 mb-2 px-2
           ${
             selectedCategory === "science"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <FlaskConical /> Science
          </button>
          <button
            onClick={() => filterBooksData("history")}
            className={`font-bold w-full text-left rounded-xl transition-all duration-300 flex items-center gap-2 mb-2 px-2
           ${
             selectedCategory === "history"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <ClipboardClock /> History
          </button>
          <button
            onClick={() => filterBooksData("self-help")}
            className={`font-bold w-full text-left rounded-xl transition-all duration-300 flex items-center gap-2 mb-2 px-2
           ${
             selectedCategory === "self-help"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <BookUser /> Self-Help
          </button>
          <button
            onClick={() => filterBooksData("business")}
            className={`font-bold w-full text-left rounded-xl transition-all duration-300 flex items-center gap-2 mb-2 px-2
           ${
             selectedCategory === "business"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <BriefcaseBusiness /> Business
          </button>
        </div>
      </div>
      
      <div className="md:hidden">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Featured Books</h1>
            <p>Handpicked top reads just for you.</p>
          </div>
          <form className="flex gap-3">
            <label className="input outline-0">
              <Search />
              <input
                type="search"
                required
                placeholder="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </label>
            <input
              type="submit"
              value="Search"
              onClick={handleSearchInput}
              className="btn bg-[#403229] text-white"
            />
          </form>
        </div>
      </div>
      
      {/* category for sm */}
      <div className="md:hidden overflow-scroll w-full mt-3 ">
        <div className=" text-start flex gap-3 overflow-x-scroll w-full">
          <button
            onClick={() => filterBooksData("all")}
            className={`font-bold w-full text-left transition-all duration-300 flex items-center gap-2 mb-2 p-2 border border-gray-400 rounded-full 
           ${
             selectedCategory === "all"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <BookOpen /> All
            <span className="text-end">({filterBooks.length})</span>
          </button>
          <button
            onClick={() => filterBooksData("story")}
            className={`font-bold w-full text-left border border-gray-400 rounded-full  transition-all duration-300 flex items-center gap-2 mb-2 px-2
           ${
             selectedCategory === "story"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <BookOpenText /> Story
          </button>
          <button
            onClick={() => filterBooksData("tech")}
            className={`font-bold w-full text-left border border-gray-400 rounded-full  transition-all duration-300 flex items-center gap-2 mb-2 p-2 
           ${
             selectedCategory === "tech"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <Cpu /> Tech
          </button>
          <button
            onClick={() => filterBooksData("science")}
            className={`font-bold w-full text-left border border-gray-400 rounded-full  transition-all duration-300 flex items-center gap-2 mb-2 p-2
           ${
             selectedCategory === "science"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <FlaskConical /> Science
          </button>
          <button
            onClick={() => filterBooksData("history")}
            className={`font-bold w-full text-left border border-gray-400 rounded-full  transition-all duration-300 flex items-center gap-2 mb-2 p-2
           ${
             selectedCategory === "history"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <ClipboardClock /> History
          </button>
          <button
            onClick={() => filterBooksData("self-help")}
            className={`font-bold w-full text-left border border-gray-400 rounded-full  transition-all duration-300 flex items-center gap-2 mb-2 p-2
           ${
             selectedCategory === "self-help"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <BookUser /> Self
          </button>
          <button
            onClick={() => filterBooksData("business")}
            className={`font-bold w-full text-left border border-gray-400 rounded-full  transition-all duration-300 flex items-center gap-2 mb-2 p-2
           ${
             selectedCategory === "business"
               ? "bg-[#2e2014] text-white"
               : "hover:bg-[#2e2014] hover:text-white"
           }`}
          >
            <BriefcaseBusiness /> Business
          </button>
        </div>
      </div>
      <div className="md:col-span-10">
        <div className="lg:container mx-auto">
          <div className="md:flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center hidden ">
            <div>
              <h1 className="text-3xl font-bold mb-2">Featured Books</h1>
              <p>Handpicked top reads just for you.</p>
            </div>
            <form className="flex gap-3">
              <label className="input outline-0">
                <Search />
                <input
                  type="search"
                  required
                  placeholder="Search"
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </label>
              <input
                type="submit"
                value="Search"
                onClick={handleSearchInput}
                className="btn bg-[#403229] text-white"
              />
            </form>
          </div>
          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-2 animate__animated animate__fadeInDown">
            {filterBooks.length > 0 ? (
              filterBooks.map((book) => (
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
                    <div className="card-body w-full items-center text-center">
                      <h2 className="card-title">{book.title}</h2>
                      <p className="font-semibold">{book.author}</p>
                      <p className="line-clamp-2">{book.description}</p>
                      {data?.user ? (
                        <div className="card-actions ">
                          <Link href={`/bookDetails/${book.id}`}>
                            <button className="btn bg-[#403229] w-full text-white rounded-full active:scale-95">
                              View Details
                            </button>
                          </Link>
                        </div>
                      ) : (
                        <div className="card-actions ">
                          <Link href={"/login"}>
                            <button className="btn bg-[#403229] w-full text-white rounded-full active:scale-95">
                              View Details
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="">
                <h1 className="text-3xl font-bold text-center">
                  No Books Found
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksCart;
