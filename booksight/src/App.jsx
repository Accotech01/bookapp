import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import About from "./pages/About";
import ReadBook from "./pages/ReadBook";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/book/:id/read" element={<ReadBook />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

