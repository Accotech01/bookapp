import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setBooks([]);
      return;
    }

    const delay = setTimeout(() => {
      fetchBooks();
    }, 600);

    return () => clearTimeout(delay);
  }, [query]);

  const fetchBooks = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setBooks(data.docs.slice(0, 8));
    } catch {
      setError("Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 pl-4 text-lg border border-gray-300 rounded-lg focus:outline-[#F19595] focus:ring-2 focus:ring-[#F19595]"
      />

      {/* Suggestions Dropdown */}
      {query && books.length > 0 && (
        <div className="absolute z-10 w-full bg-white border mt-2 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {books.map((book, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/book/${book.key.replace("/works/", "")}`)
              }
              className="flex items-center gap-4 p-3 hover:bg-gray-100 cursor-pointer"
            >
              {/* Book Cover */}
              <img
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "https://via.placeholder.com/60x90?text=No+Cover"
                }
                alt={book.title}
                className="w-14 h-20 object-cover rounded"
              />

              {/* Book Info */}
              <div>
                <p className="font-semibold">{book.title}</p>
                <p className="text-sm text-gray-600">
                  {book.author_name?.join(", ") || "Unknown author"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {loading && <p className="mt-2 text-sm">Searching…</p>}
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default BookSearch;
