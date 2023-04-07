import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import Book from './Book'
import LoadingSpinner from '../LoadingSpinner'

const Books = () => {
   const navigation = useNavigation();
   if (navigation.state === "loading") {
     return <LoadingSpinner />;
   }
  const {books} = useLoaderData();
  return (
    <div className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] mt-2'>
      {
        books.map(book =><Book {...book}/>)
      }
    </div>
  )
}

export default Books