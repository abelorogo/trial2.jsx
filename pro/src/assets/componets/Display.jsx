    import React from 'react';
    import { Link } from 'react-router-dom';

    export default function Display({ info }) {
      return (
        <div>
          <div className="card-row" >
      <img className="card-img-top" src={info.flags.png} alt={info.flags.alt} />
            <div className="card-body" style={{ padding: "15px" }}>
              <h1>Continent: {info.continents}</h1>
              <h2 className="card-title">Capital City: {info.capital}</h2>
              <p className="card-text">{info.altSpellings.join(", ")}</p>
              <Link to={`/country/${info.cca3}`} state={{ country: info }}>See neibouring countries</Link>
            </div>
          </div>
        </div> 
      );
    }
