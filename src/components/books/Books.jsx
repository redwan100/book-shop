import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Book from './Book'

const Books = () => {
  const {books} = useLoaderData();
  console.log(books);
  return (
    <div className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] mt-2'>
      {
        books.map(book =><Book {...book}/>)
      }
    </div>
  )
}

export default Books