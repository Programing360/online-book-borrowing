"use client";
import { BookOpen, Link } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const BookDetailsButton = ({ bookDetails }) => {
  return (
    <div>
      <button
        onClick={() =>
          toast.success(
            <div>
              <p>Book Borrowed Successfully!</p>
              <p>You have Borrowed <span className="text-[#d2aa56]">{bookDetails.title}</span></p>
            </div>,
          )
        }
        className="btn bg-[#d2aa56] rounded-lg w-full active:scale-95"
      >
        <BookOpen /> Borrow This Book
      </button>
    </div>
  );
};

export default BookDetailsButton;
