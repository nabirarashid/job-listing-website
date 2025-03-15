import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      {/* Using FaExclamationTriangle icon from react-icons with Tailwind CSS classes */}
      <FaExclamationTriangle className="text-yellow-400 text-5xl mb-4" />
      
      {/* Heading with Tailwind CSS classes */}
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      
      {/* Paragraph with Tailwind CSS classes */}
      <p className="text-xl mb-5">This page does not exist</p>
      
      {/* Link component from react-router-dom for client-side navigation */}
      <Link
        to="/" // Specifies the path to navigate to
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4" // Tailwind CSS classes for styling
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFound;