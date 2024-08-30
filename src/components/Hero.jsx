// Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative flex flex-col items-center justify-center text-center bg-no-repeat bg-center bg-cover text-white min-h-screen" 
      style={{ backgroundImage: 'url(/public/bg.svg)' }} // Ensures the full SVG background is visible
    >
      {/* Logo and Text Positioned at the Top Center */}
      <div className="absolute top-16 w-full flex flex-col items-center px-4 md:px-0">
        <img 
          src="/public/logo.svg" 
          alt="Clash Bytes Logo" 
          className="w-72 md:w-80 lg:w-96 mb-6" // Significantly increased logo size
        />
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed bg-black bg-opacity-50 p-4 rounded-lg">
          A fun and inclusive environment where learning programming is accessible, engaging, and rewarding, equipping users with practical skills and credentials that are valuable in the evolving digital landscape.
        </p>
        <button className="mt-6 px-8 py-4 bg-pink-500 text-white text-lg rounded hover:bg-pink-600 transition">
          Begin to Forge your Future!
        </button>
      </div>
    </section>
  );
};

export default Hero;
