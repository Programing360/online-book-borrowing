import Image from "next/image";
import React from "react";

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
      },
      {
        id: 2,
        title: "Read Anywhere",
        description: "Enjoy your favorite books anytime, anywhere.",
        image_url:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000",
        alt_text: "Person reading on an e-reader",
      },
      {
        id: 3,
        title: "Curated for You",
        description: "Expert picks and personalized recommendations.",
        image_url:
          "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1000",
        alt_text: "Open book on a wooden table",
      },
      {
        id: 4,
        title: "Community",
        description: "Join a community of book lovers and share your thoughts.",
        image_url:
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1000",
        alt_text: "Group of people discussing books",
      },
    ],
  };

  return (
    <div className="bg-[#f2efeb] mt-20">
      <div className="container mx-auto pt-10">
        <h1 className="text-2xl font-bold">Why Readers Choose BookNest</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {data.features.map((item) => (
            <div key={item.id}>
              <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={400}
                    height={400}
                  ></Image>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Card Title</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookNest;
