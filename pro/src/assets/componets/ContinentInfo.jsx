import React from 'react'

export default function ContinentInfo({country }) {
    if (!country) {
        return <div>No country data available</div>;
      }
    
      return (
        <div>
          <h1>country: {country.name.common}</h1>
          <div className="card" style={{ width: "18rem" }}>
            <img src={country.flags.png} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Capital City: {country.capital}</h5>
              <p className="card-text">country location on the map: <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a></p>
              <p className="card-text">Streets: <a href={country.maps.openStreetMap} target="_blank" rel="noopener noreferrer">OpenStreetMap</a></p>
            </div>
            <ul className="list-group list-group-flush">
              <details>
                <li className="list-group-item">Currencies: {Object.values(country.currencies || {}).map(currency => currency.name).join(', ')}</li>
                <li className="list-group-item">Postal Code Format: {country.postalCode?.format}</li>
                <li className="list-group-item">Postal Code Regex: {country.postalCode?.regex}</li>
                <li className="list-group-item">Continent: {country.region}</li>
                <li className="list-group-item">Subregion: {country.subregion}</li>
                <li className="list-group-item">Time Zone: {country.timezones?.[0]}</li>
              </details>
            </ul>
            <div className="card-body">
              <Link to="/">Back</Link>
            </div>
          </div>
        </div>
      );
}
