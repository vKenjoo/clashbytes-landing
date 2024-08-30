// Sample.jsx
import React from 'react';

const Sample = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-900 text-white min-h-[90vh]">
      {/* Image on the Left */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img 
          src="/public/sample2.svg" 
          alt="Sample Image" 
          className="rounded-lg max-w-full h-auto"
        />
      </div>

      {/* Text on the Right */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-10">
        <h2 className="text-3xl font-bold mb-4">Engaging Title for Your Content</h2>
        <p className="text-lg text-gray-300 mb-6">
          This is a sample section where the image is displayed on one side, and relevant text content is shown on the other. 
          This layout is ideal for showcasing product features, telling a story, or presenting any information that benefits 
          from visual support alongside descriptive text.
        </p>
        <button className="px-6 py-3 bg-pink-500 text-white rounded hover:bg-pink-600 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Sample;
