const API_URL = 'https://swapi.dev/api/starships';

const show = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data
}

export default show;