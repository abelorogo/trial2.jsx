import React from 'react';

export default function Continents({ onSelectContinent }) {
  
  const handleSelectChange = (event) => {
    const selectedContinent = event.target.value;
    onSelectContinent(selectedContinent);
  };

  return (
    <div>
      <h2>Select a continent:</h2>
      <select name="continents" id="continents" onChange={handleSelectChange}>
        <option value="" disabled selected>Select your option</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="South America">South America</option>
        <option value="Australia">Australia</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctica</option>
      </select>
    </div>
  );
}
