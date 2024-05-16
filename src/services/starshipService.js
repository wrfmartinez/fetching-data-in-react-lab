const BASE_URL = `https://swapi.dev/api/`;

const show = async (name) => {
  try {
    const res = await fetch(`${BASE_URL}starships/`);
    const data = await res.json();
    return data.results;
  } catch(err) {
    console.error("Couldn't fetch starships", err);
  }
}

export default { show };