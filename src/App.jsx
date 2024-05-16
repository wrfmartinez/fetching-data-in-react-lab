import './App.css';
import starshipService from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import StarshipCard from './components/StarshipCard';

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