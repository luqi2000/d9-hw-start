import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_FROM_FAVOURITES } from "../redux/actions";

const FavouritesPage = () => {
  const favourites = useSelector(state => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <ListGroup>
      {favourites.length > 0 &&
        favourites.map((favourite, i) => (
          <ListGroup.Item key={favourite._id}>
            <Link to={`/${favourite.url}`}>{favourite.company_name}</Link>
            <span className="mx-3">{favourite.title}</span>
            <Button
              className="bg-danger"
              onClick={() => {
                dispatch({ type: DELETE_FROM_FAVOURITES, payload: i });
              }}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default FavouritesPage;
