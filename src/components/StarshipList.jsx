import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  return (
    <>
      <ul>
        {starships.map((starship, idx) => (
          <StarshipCard key={idx} starship={starship} />
        ))}
      </ul>
    </>
  )
}

export default StarshipList;