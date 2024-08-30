// FeaturesSection.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess, faCertificate, faBrain } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faUniversalAccess,
    title: 'Access and Inclusivity',
    description: 'Strives to be inclusive by offering support for multiple devices and languages, where access remains a challenge.',
  },
  {
    icon: faCertificate,
    title: 'Career Opportunities',
    description: 'Integrates certifications from reputable companies like AWS and Google, enhancing career prospects for users.',
  },
  {
    icon: faBrain,
    title: 'Combats Low Retention Levels',
    description: '85% of online course takers do not finish their courses due to boredom, lack of engagement, and a sense of disconnect.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative -mt-8 w-full px-4 md:px-16 py-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 bg-opacity-75 rounded-t-lg backdrop-filter backdrop-blur-md min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16 h-full max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg w-full max-w-md md:max-w-lg">
            <FontAwesomeIcon icon={feature.icon} className="text-4xl text-yellow-400 mb-4" />
            <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
