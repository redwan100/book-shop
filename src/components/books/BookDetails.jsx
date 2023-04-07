import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const BookDetails = () => {
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return <LoadingSpinner />
  }
  const [fold, setFold] = useState(true);
  const { image, authors, title, desc, publisher, year, rating, price, url } =
    useLoaderData();

  return (
    <div className="border border-slate-200 m-3 grid gap-4 items-center sm:grid-cols-2">
      <div>
        <img className="w-full mx-auto" src={image} alt="" />
      </div>

      <div className="p-4">
        <div className="space-y-4">
          <small className="uppercase bg-yellow-500 py-1 px-2 rounded-full font-medium">
            brand new
          </small>
          <h1 className="text-4xl font-bold">{title}</h1>

          <div>
            <p>Authors: {authors}</p>
            <p>Publisher: {publisher}</p>
            <p>Year: {year}</p>
            <p>Rating: {rating}</p>
          </div>

          {fold ? (
            <p className="text-gray-600">
              {desc.slice(0, 100)}...
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setFold(!fold)}
              >
                See more
              </span>
            </p>
          ) : (
            <p className="text-gray-600">
              {desc}...
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setFold(!fold)}
              >
                See less
              </span>
            </p>
          )}

          <div className="flex items-center gap-3">
            <a
              href={url}
              target="_blank"
              className="bg-teal-400 py-2 px-4 rounded-md font-semibold"
            >
              Buy Now
            </a>
            <p className="font-medium">Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
