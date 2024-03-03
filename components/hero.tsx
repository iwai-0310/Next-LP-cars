import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='heor'>
      <div className="flex-1 pt-36 padding-x">
        {/* add title here */}
        <h1 className="hero__title">
          Find, book or rent a car - in a blink !
        </h1>
        {/* add subtitle here */}
        <p className='hero__subtitle'>
          Streamline your car rental experience with our effortles booking process
        </p>
      </div>
    </div>
  )
}

export default Hero