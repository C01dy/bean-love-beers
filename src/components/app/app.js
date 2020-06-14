import React from 'react';
import {Route, Switch} from "react-router-dom";

import './app.css';
import {BeersListContainer, BeerPageContainer} from '../../containers';
import Header from "../header";
import SearchBar from "../search-bar";

const beerList = (
	<Route
		path="/"
		exact
		render={() => <BeersListContainer/>}/>
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
				<SearchBar/>
				<Switch>
					{beerList}
					{beerPage}
				</Switch>
			</div>
		</div>
	);
}

export default App;


