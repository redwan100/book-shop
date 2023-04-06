import React from "react";
const Book = ({ title, image, price, subtitle }) => {
  return (
    <div
      className="border
    border-slate-100 shadow-sm relative rounded-md overflow-hidden group:"
    >
      <img className="w-full h-full" src={image} alt="" />

      <div className="absolute top-0 left-0 w-full h-full bg-slate-800/90 text-white p-3 flex flex-col space-y-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{subtitle}</p>
        <small className="mt-[auto_!important] text-lg">{price}</small>
      </div>
    </div>
  );
};

export default Book;
