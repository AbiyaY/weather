import React , { useEffect, useState } from 'react';

import Weather from './components/Weather';



import './App.css';

const App = () => {

  const APP_KEY = "4078ef130076401db1a175048202107";
  

  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(" ");
  const [query, setQuery] = useState('cv4 8lu')
  useEffect( () => {
    

  const getWeather = async () => {
    setLoading(true);
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APP_KEY}&q=${query}`);
    const data = await response.json();
    setWeather(data);
    console.log(data);
    setLoading(false);
  }

  getWeather();
  
  },[query]);

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App" >
      <h1 >Weather-Finder</h1>  
      <form onSubmit={getSearch} className="search-form " >
      <input 
        className="search-bar" 
        type = "text" 
        name =" country" 
        placeholder = "Country..." 
        value = {search}
        onChange = {(e) => setSearch(e.target.value)}
      />
      <button className ="btn" type="submit" >
                Search
      </button>
      </form>
      <Weather loading={loading} weather={weather}/>
            
    </div>
    
  );

};

export default App;
