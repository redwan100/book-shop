import React, { useState } from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import Book from './Book'
import LoadingSpinner from '../LoadingSpinner'


// const Books = () => {
//    const navigation = useNavigation();
//    if (navigation.state === "loading") {
//      return <LoadingSpinner />;
//    }
//   const {books} = useLoaderData();
//   return (
//     <div className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] mt-2'>
//       {
//         books.map(book =><Book {...book}/>)
//       }
//     </div>
//   )
// }
const Books = () => {
  const navigation = useNavigation();
     if (navigation.state === "loading") {
       return <LoadingSpinner />;
     }
  const { books: initialBooks } = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState(initialBooks);

  const handleSearch = async (event) => {
    event.preventDefault();
    const URL = `https://api.itbook.store/1.0/search/${searchQuery}`;
    const res = await fetch(URL);
    const { books } = await res.json();
    setBooks(books);
  };

  console.log("init", initialBooks);
  console.log("search ", books);

  return (
    <div className="my-4">
      <form action="" className="flex w-[80%] mx-auto">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          placeholder="Search here..."
          className="border-b w-full bg-teal-50 p-2 outline-none border border-teal-400 rounded-tl-md rounded-bl-md"
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="bg-teal-400 py-2 px-4 font-medium text-lg text-white"
        >
          Search
        </button>
      </form>
      <h2>Books</h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] mt-2">
        {books.map((book) => (
          <Book key={book.isbn13} {...book} />
        ))}
      </div>
    </div>
  );
}

export default Books