import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const FavouritesJob = () => {
  const favourites = useSelector(state => state.favourites.content);
  return (
    <ListGroup>
      {favourites.length > 0 &&
        favourites.map(favourite => (
          <ListGroup.Item key={favourite._id}>
            <p>{favourite.title}</p>
            <p>{favourite.company_name}</p>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default FavouritesJob;
