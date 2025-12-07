import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

export default function App(){
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none"><path d="M3 6h14v12H3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round"/></svg>
            <span className="font-semibold text-lg">reBuks</span>
          </Link>
          <nav className="flex gap-6 items-center text-sm">
            <Link to="/browse" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">About</Link>
            <a className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm" href="#get-started">Get Started</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <footer className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} ReadBooks — Built with Open Library API
        </div>
      </footer>
    </div>
  )
}
