import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Display from "./assets/componets/Display"
import Continents from "./assets/componets/Continet"
import NavBar from "./assets/componets/NavBar"


function App() {
  const [countries, setCountries] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setCountries(data);
      });
    });
  }, []);

  const handleContinentSelect = (continent) => {
    setSelectedContinent(continent);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCountries = countries.filter((country) => {
    const matchesContinent = selectedContinent ? country.region === selectedContinent : true;
    const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesContinent && matchesSearch;
  });

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Continents onSelectContinent={handleContinentSelect} />
      <div className='container'>
        <div className='row justify-content-around' style={{
          display: "flex",
          backgroundColor: "pink",
          border: "1px solid #ddd",
          borderRadius: "5px",
          flexWrap: "wrap",
          boxShadow: "0 2px 5px rgba(0, 200, 100, 100)",
          marginBottom: "20px",
          padding: "5px",
        }}>
          {filteredCountries.map((country, i) => (
            <div key={i} className='col-md-4 mb-4'>
              <Display info={country} />
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
