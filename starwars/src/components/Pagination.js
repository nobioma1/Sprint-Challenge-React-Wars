import React from 'react';

const Pagination = ({ previousLink, goPrevious, nextLink, goNext }) => {
  return (
    <div className="pagination">
      <button
        disabled={previousLink === null}
        onClick={() => goPrevious(previousLink)}
      >
        Previous
      </button>
      <button 
        disabled={nextLink === null} 
        onClick={() => goNext(nextLink)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
