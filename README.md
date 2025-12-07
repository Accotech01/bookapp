A responsive React-based Book Library application that allows users to search for books, browse results, and view detailed information using the Open Library API.
This project demonstrates API integration, state management, component reusability, and responsive UI design using React + Tailwind CSS.

🚀 Features
🔍 Book Search

Search books by title, author, or keywords.

Displays:

Book cover

Title

Author(s)

Publisher

Handles “no results found” gracefully.

📖 Book Details Page

Displays detailed information including:

Description

Publication date

ISBN

Number of pages

Subjects (genres/topics)

🎨 Responsive UI

Styled using Tailwind CSS.

Works on desktop, tablet, and mobile.

⚡ Client-Side Routing

Built with React Router.

Click a book to view its details on a separate page.

🧠 State Management

React hooks: useState, useEffect

Efficient API fetching and UI updates.

❗ Error Handling

Network error handling

Invalid queries

Missing book details

🛠️ Tech Stack
Technology	Purpose
React (Vite)	Frontend framework
Tailwind CSS	UI styling
Open Library API	Fetching book data
React Router	Page navigation
JavaScript (ES6+)	Logic
📦 Installation & Setup

Follow the steps below to run the project locally.

1️⃣ Clone the repository
git clone https://github.com/your-username/book-library-app.git
cd book-library-app

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev

4️⃣ Open in browser

Visit:

http://localhost:5173

🧩 Project Structure
/src
 ├── components
 │   ├── SearchBar.jsx
 │   ├── BookCard.jsx
 │   ├── BookList.jsx
 │   └── BookDetails.jsx
 ├── pages
 │   ├── Home.jsx
 │   └── DetailsPage.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css

🌐 API Usage
🔎 Search Books
https://openlibrary.org/search.json?q=harry+potter

📘 Book Details

Use work key from search results (example: /works/OL82563W):

https://openlibrary.org/works/OL82563W.json

🖼️ Book Covers
https://covers.openlibrary.org/b/id/{coverId}-M.jpg

🚀 Deployment

You can deploy the app on:

Netlify

Vercel

GitHub Pages

Example (for Vercel):

npm run build
vercel deploy

⭐ Stretch Features (Planned Enhancements)

User authentication

Favorite books / reading list

Reviews & ratings

Genre browsing

Dark mode

Pagination

Loading skeletons

🐞 Troubleshooting
❌ BookDetails shows nothing?

You must pass book.key (work ID) into your route:

navigate(`/book${book.key}`);

❌ No cover image?

Use fallback:

<img src={
  book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "/no-cover.png"
} />

🤝 Contributing

Pull requests are welcome!
Feel free to fork the project and submit improvements.

📄 License

MIT License.
