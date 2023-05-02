import React, { useState } from 'react';
import ArrowButton from './ArrowButton';

const MyComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <h1>Page {currentPage}</h1>
      <ArrowButton a="left" onClick={handlePrevPage} />
      <ArrowButton b="right" onClick={handleNextPage} />
    </div>
  );

};

export default MyComponent;
