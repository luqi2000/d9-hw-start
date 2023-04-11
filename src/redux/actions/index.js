import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE_FROM_FAVOURITES = "DELETE_FROM_FAVOURITES";
export const JOB = "JOB";
export const SEARCH = "SEARCH";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
const baseEndpoint2 = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

export const searchAction = (dispatch, query) => {
  return async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: JOB, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchCompany = () => {
  return async () => {
    const params = useParams();
    const dispatch = useDispatch();
    try {
      const response = await fetch(baseEndpoint2 + params.companyName);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: SEARCH, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
