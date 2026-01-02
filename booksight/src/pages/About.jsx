import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#F19595] mb-6">
        About reBuk
      </h1>

      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        <strong>reBuk</strong> is a modern book discovery platform designed to
        help readers explore, track, and enjoy books effortlessly. Whether
        you’re searching for your next great read or rediscovering forgotten
        classics, reBuk makes the journey enjoyable.
      </p>

      {/* Mission */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to inspire a culture of reading by making books
          accessible, searchable, and engaging. We believe reading should be
          simple, personal, and motivating.
        </p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What You Can Do on reBuk</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <li className="border rounded-lg p-4">
            🔍 Search books by title or author
          </li>
          <li className="border rounded-lg p-4">
            ⭐ Discover featured and trending books
          </li>
          <li className="border rounded-lg p-4">
            📖 View detailed book information
          </li>
          <li className="border rounded-lg p-4">
            🎯 Stay motivated to reach your reading goals
          </li>
        </ul>
      </section>

      {/* Data Source */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Data Source</h2>
        <p className="text-gray-700 leading-relaxed">
          reBuk uses the <strong>Open Library API</strong>, an open and
          community-driven catalog of books. This allows us to provide rich,
          up-to-date information on millions of books worldwide.
        </p>
      </section>

      {/* Future Vision */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">What’s Coming Next</h2>
        <p className="text-gray-700 leading-relaxed">
          We’re working on exciting features like personal reading lists,
          favorites, reading progress tracking, and user accounts — all to make
          reBuk your perfect reading companion.
        </p>
      </section>
    </div>
  );
};

export default About;
