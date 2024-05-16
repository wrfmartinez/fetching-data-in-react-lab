import './App.css';
import starshipService from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import StarshipCard from './components/StarshipCard';

const App = () => {
  const fetch = async () => {
    const data = await starshipService.show('Death Star');
  }

  return (
    <div>
      <StarshipSearch fetch={fetch} />
      <StarshipList />
      <StarshipCard />
    </div>
  );
}

export default App