import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function DisplayContinent() {
  const location = useLocation();
  const { countries, continent } = location.state;

  return (
    <div>
      <h1>Countries in {continent}</h1>
      <div className="container">
        <div className="row">
          {countries.map((country, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={country.flags.png} className="card-img-top" alt={country.name.common} />
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                  <p className="card-text">Capital: {country.capital}</p>
                  <Link to={`/details/${country.cca3}`} state={country} className="btn btn-primary">See More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
