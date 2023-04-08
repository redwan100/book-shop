import React, { useState } from 'react'
import { useLoaderData, useNavigation, useNavigate } from "react-router-dom";
import Book from './Book'
import LoadingSpinner from '../LoadingSpinner'



const Books = () => {
  const navigation = useNavigation();
     if (navigation.state === "loading") {
       return <LoadingSpinner />;
     }

     const navigate = useNavigate()
  const { books: initialBooks } = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState(initialBooks);

  const handleSearch = async (event) => {
    event.preventDefault();
    const URL = `https://api.itbook.store/1.0/search/${searchQuery}`;
    const res = await fetch(URL);
    const { books } = await res.json();
    setBooks(books);
    setSearchQuery('')
  };

  const handleBack = ()=>{
    navigate(-1)
  }

  return (
    <div className="my-4">
      <form action="" className="flex w-[50%] mx-auto bg-rose-100">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          placeholder="Search here..."
          className="border-b w-full bg-rose-50 p-2 outline-none border border-rose-400 text-rose-600 rounded-tl-md rounded-bl-md"
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="bg-rose-400 py-2 px-4 font-medium text-lg text-white"
        >
          Search
        </button>
      </form>

      {books.length === 0 && (
        <div className="relative">
          <button
            onClick={handleBack}
            className="bg-gray-200 py-1 pr-2 pl-1 rounded-md font-medium inline-flex items-center justify-center m-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </button>

          <p className="text-center mt-11 text-4xl font-semibold">
            No result found
          </p>
        </div>
      )}
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] mt-2">
        {books.map((book) => (
          <Book key={book.isbn13} {...book} />
        ))}
      </div>
    </div>
  );
}

export default Books