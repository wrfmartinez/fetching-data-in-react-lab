import { useState } from "react";

const StarshipSearch = ({ fetch }) => {
  const [ starships, setStarships ] = useState([]);

  const handleInputChange = (event) => {
    setStarships(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    starships.map((starship) => {
      starship === fetch(starship.results.name) ? console.log(starship) : 'no data';
    })
    setStarships('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        id="search" 
        type="text" 
        onChange={handleInputChange} 
        />
      <button type="submit">Search</button>
    </form>
  )
}

export default StarshipSearch;