import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const randomKeyword = () => {
    const words = [
      "love",
      "magic",
      "war",
      "science",
      "history",
      "adventure",
      "fantasy",
      "mystery",
      "nature",
      "space",
      "art",
    ];
    return words[Math.floor(Math.random() * words.length)];
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const keyword = randomKeyword();
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${keyword}`
        );
        const data = await res.json();
        setBooks(data.docs.slice(0, 12));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const getCover = (coverId) =>
    coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
      : "https://via.placeholder.com/150?text=No+Cover";

  return (
    <div className="p-6">
      <h1 className="text-center font-bold text-4xl text-[#f19595] mb-10">
        FEATURED BOOKS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.key}
            onClick={() =>
              navigate(`/book/${book.key.replace("/works/", "")}`)
            }
            className="border rounded-xl shadow-md overflow-hidden bg-white cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={getCover(book.cover_i)}
              alt={book.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">
                {book.author_name?.join(", ") || "Unknown Author"}
              </p>
            </div>
            <button
  onClick={(e) => {
    e.stopPropagation();
    navigate(`/book/${book.key.replace("/works/", "")}/read`);
  }}
  className="mt-3 w-full bg-[#F19595] text-white py-2 rounded hover:bg-[#f07c7c]"
>
  Read
</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
