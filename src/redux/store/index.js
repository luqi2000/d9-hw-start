// questo file si occuperà di creare il Redux Store all'avvio dell'applicazione

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import companySearchReducers from "../reducers/companySearchReducers";
import searchReducers from "../reducers/searchReducers";

const rootReducers = combineReducers({
  favourites: mainReducer,
  search: searchReducers,
  companySearch: companySearchReducers
});

const store = configureStore({
  reducer: rootReducers
});

export default store;
