import React from 'react';

function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div>
      <input type='text' placeholder='Ciudad...' />
      <button onClick={() => onSearch('Buscando ciudad...')}>Agragar</button>
    </div>
  );
};

export default SearchBar;
