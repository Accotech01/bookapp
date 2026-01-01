import {React, useState, useEffect} from 'react'

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);

  // Generate a random search keyword
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
        setBooks(data.docs.slice(0, 12)); // show 12 random books
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const getCover = (coverId) => {
    return coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
      : "https://via.placeholder.com/150?text=No+Cover";
  };

  return (
    <div className="p-6">
      <h1 className='text-center font-bold text-3xl md:text-4xl lg:text-5xl sm:text-3xl text-[#f19595] mb-10'>FEATURED BOOKS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.key}
            className="border rounded-xl shadow-md overflow-hidden bg-white"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;






