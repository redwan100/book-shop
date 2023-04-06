import React from 'react'
import Lottie from "lottie-react";
import reading from '../../public/98849-book-lover.json';

const Home = () => {

  return (
    <div className="my-3 grid gap-4 md:grid-cols-[1fr_1fr] items-center justify-between">
      {/* left  */}
      <div className='space-y-4'>
        <p className='bg-yellow-400 w-max px-3 rounded-full font-semibold uppercase text-sm'>on sale</p>
        <h1 className='text-4xl md:text-6xl font-semibold'>
          A reader lives a thousand lives <br /> <span className='text-rose-500'>before he dies</span>
        </h1>
        <p>
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t. Visit
          Store
        </p>

        <div>
          <button className='inline-flex items-center gap-2 border bg-rose-500 text-white py-2 px-3 rounded-md font-semibold hover:bg-rose-600'>
            Visit Store{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <p>Learn More</p>
        </div>
      </div>

      {/* right  */}
      <div>
        <Lottie animationData={reading} loop={true} />;
      </div>
    </div>
  );
}

export default Home