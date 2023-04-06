import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BookDetails = () => {
    const BookData = useLoaderData()
    console.log(BookData);
  return (
    <div>BookDetails</div>
  )
}

export default BookDetails