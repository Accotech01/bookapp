import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(
          `https://openlibrary.org/works/${id}.json`
        );
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p className="p-8">Loading book details...</p>;
  if (!book) return <p className="p-8">Book not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cover */}
        {book.covers && (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
            alt={book.title}
            className="w-64 rounded-lg shadow-md"
          />
        )}

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-[#f19595]">
            {book.title}
          </h1>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {book.description?.value ||
              book.description ||
              "No description available."}
          </p>
          <button
            onClick={() => navigate(`/book/${id}/read`)}
            className="mt-6 bg-[#F19595] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#f07c7c]"
          >
           📖 Read Book
          </button>


          {book.first_publish_date && (
            <p className="text-sm text-gray-600">
              <strong>First Published:</strong> {book.first_publish_date}
            </p>
          )}

          {book.subjects && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {book.subjects.slice(0, 10).map((subject, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
