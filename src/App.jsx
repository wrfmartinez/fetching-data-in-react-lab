import './App.css';
import StarshipCard from './components/StarshipCard';
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';

const App = () => {

  return (
    <div>
      <StarshipSearch />
      <StarshipList />
      <StarshipCard />
    </div>
  );
}

export default App