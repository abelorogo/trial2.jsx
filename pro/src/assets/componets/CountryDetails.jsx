import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CountryDetails() {
  const location = useLocation();
  const { country } = location.state;
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (country.borders && country.borders.length > 0) {
      fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(',')}`)
        .then(response => response.json())
        .then(data => setNeighbors(data));
    }
  }, []);

  return (
    <div>
      <h1>Country: {country.name.common}</h1>
      <div className="card" style={{ width: "18rem" }}>
        <img src={country.flags.png} className="card-img-top" alt={country.flags.alt} />
        <div className="card-body">
          <h5 className="card-title">Capital City: {country.capital}</h5>
          <p className="card-text">Country Location on the Map: <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a></p>
          <p className="card-text">Streets: <a href={country.maps.openStreetMap} target="_blank" rel="noopener noreferrer">OpenStreetMap</a></p>
        </div>
        <ul className="list-group list-group-flush">
          <details>
            <li className="list-group-item">Currencies: {Object.values(country.currencies).map(currency => currency.name).join(', ')}</li>
            <li className="list-group-item">Postal Code: {country.postalCode.format}</li>
            <li className="list-group-item">Continent: {country.region}</li>
            <li className="list-group-item">Subregion: {country.subregion}</li>
            <li className="list-group-item">Time Zone: {country.timezones.join(', ')}</li>
          </details>
        </ul>
      </div>
      <h2>Neighboring Countries:</h2>
      <div className="neighbor-countries">
        {neighbors.length > 0 ? neighbors.map(neighbor => (
          <div key={neighbor.cca3} className="card" style={{ width: "18rem" }}>
            <img src={neighbor.flags.png} className="card-img-top" alt={neighbor.flags.alt} />
            <div className="card-body">
              <h5 className="card-title">Country: {neighbor.name.common}</h5>
              <p className="card-text">Capital: {neighbor.capital}</p>
              <Link to={`/country/${neighbor.cca3}`} state={{ country: neighbor }}>See more</Link>
            </div>
          </div>
        )) : <p>No neighboring countries found.</p>}
      </div>
    </div>
  );
}
