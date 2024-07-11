import React, { useState } from 'react';

export default function NavBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
   
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSearch(query);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0" onSubmit={handleFormSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
