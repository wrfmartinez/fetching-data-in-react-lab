import { useState } from "react";

const StarshipSearch = () => {
  const [ starship, setStarship ] = useState({});

  const handleInputChange = (event) => {
    setStarship(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStarship('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="search" type="text" />
      <button type="submit">Search</button>
    </form>
  )
}

export default StarshipSearch;