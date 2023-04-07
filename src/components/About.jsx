import React from 'react'
import book from "../../public/book.json";
import Lottie from "lottie-react";
const About = () => {
  return (
    <div className='h-[calc(90vh-60px)]'>
      <Lottie className='w-full h-full' animationData={book} loop={true} />;
    </div>
  );
}

export default About