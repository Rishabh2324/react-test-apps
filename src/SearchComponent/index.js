import React from 'react';

import './SearchComponent.css';

const SearchComponent = ({ searchValue, searchChange }) => {
  return (
    <div className="SearchComponent">
      <input
        placeholder="Search any robo"
        value={searchValue}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchComponent;
