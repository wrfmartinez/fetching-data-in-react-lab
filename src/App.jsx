import './App.css';
import { useState } from 'react';
import getStarships from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

const App = () => {
  const [ starships, setStarships ] = useState([]);
  const [ filteredStarships, setFilteredStarships ] = useState([]);

  const fetchStarships = async () => {
    const data = await getStarships.show();
    setStarships(data);
    setFilteredStarships(data);
  }

  const handleSearch = (searchResult) => {
    const filtered = starships.filter((starship) => {
      return starship.name.toLowerCase().includes(searchResult.toLowerCase())
    });
    setFilteredStarships(filtered);
  }

  return (
    <div>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchStarships={fetchStarships} onSearch={handleSearch} />
      <p>Number of results: {filteredStarships.length}</p>
      <StarshipList starships={filteredStarships} />
    </div>
  );
}

export default App