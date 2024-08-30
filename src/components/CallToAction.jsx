import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-800 text-white text-center shadow-inner">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Ready to Start Your Journey?</h2>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Join thousands of learners who are mastering new skills and advancing their careers with Clash Bytes.
        </p>
        <button className="px-8 py-4 bg-pink-500 text-lg font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
