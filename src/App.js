import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {

  const [countries,setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
    .catch(error=>console.log(error))
  },[])

  const handleAddCountry = (country)=>{
    console.log('added' , country);
    const newCountries = [...addedCountry,country];
    setAddedCountry(newCountries);
  }
  const [addedCountry,setAddedCountry]=useState([]);
  return (
    <div className="App">
      <h1>Country Loaded : {countries.length}</h1>
      <h2>Added countries: {addedCountry.length}</h2>
      <Cart cart ={addedCountry}></Cart>
      <ul>
      {
        countries.map(country=><Country handleAddCountry={handleAddCountry} key={country.alpha3Code} country = {country}></Country>)
      }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
