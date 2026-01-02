import React from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-screen">
      <iframe
        src={`https://openlibrary.org/works/${id}/reader`}
        title="Read Book"
        className="w-full h-full border-none"
        allowFullScreen
      />
    </div>
  );
};

export default ReadBook;
