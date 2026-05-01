"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchInput = () => {
  const [text, setText] = useState("");
  const route = useRouter();

  const handleBookData = (e) => {
    e.preventDefault();
    route.push(`/data?query=${text}`);
  };
  return (
    <div>
      <form onSubmit={handleBookData}>
        <label className="input outline-0">
          <Search />
          <input
            onChange={(e) => setText(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </form>
    </div>
  );
};

export default SearchInput;
