"use client";
import React from 'react'
import Image from 'next/image';
import CustomButton from './CustomButton';

function Hero() {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car in UG quickly
          <span className="text-blue-600">&</span><br/>
          easily..
        </h1>
        <p className="hero__subtitle">
        Elevate your car rental experience with our seamless booking process,
        ensuring effortless convenience every step of the way.
        </p>
        <CustomButton 
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white px-6 py-3 rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
          src="/hero.png"
          alt="hero"
          fill className='object-contain'
          />
          </div>
          <div className="hero__image-overlay">
        </div>
      </div>
    </div>
  )
}

export default Hero