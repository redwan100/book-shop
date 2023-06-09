import React from 'react'
import loading from '../../public/loader.json';
import Lottie from 'lottie-react'
const LoadingSpinner = () => {
  return (
    <div className='grid place-content-center  h-[70vh]'>
      <Lottie className="w-full h-full" animationData={loading} loop={true} />;
    </div>
  );
}

export default LoadingSpinner