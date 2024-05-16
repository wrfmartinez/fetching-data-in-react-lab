import { useState } from "react";

const StarshipSearch = ({ onSearch, fetchStarships }) => {
  const [ searchResult, setSearchResult ] = useState('');

  const handleInputChange = (event) => {
    setSearchResult(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSearch(searchResult);
    setSearchResult('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        id="search" 
        type="text"
        value={searchResult} 
        onChange={handleInputChange} 
        />
      <button type="submit">Search</button>
    </form>
  )
}

export default StarshipSearch;