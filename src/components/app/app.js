import React from 'react';
import {Route, Switch} from "react-router-dom";

import './app.css';
import {BeersListContainer, BeerPageContainer} from '../../containers';
import Header from "../header";
import FavouriteBeers from "../pages/favourites-beers/favourites-beers";

const beerList = (
  <Route
    path="/"
    exact
    render={() => <BeersListContainer/>}/>
);

const favouriteBeers = (
  <Route
    path="/favourites"
    render={() => <FavouriteBeers/>}
  />
);

const beerPage = (
  <Route
    path="/beer/:id"
    render={({match}) => {
      const {id} = match.params;
      return (<BeerPageContainer itemId={id}/>)
    }}/>
);

function App() {


  return (
    <div className="app">
      <Header/>
      <div className="pages-wrap mt-3 container">
        <Switch>
          {beerList}
          {favouriteBeers}
          {beerPage}
        </Switch>
      </div>
    </div>
  );
}

export default App;


