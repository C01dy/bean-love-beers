import React from 'react';
import './beers-list.css';
import BeersListItem from "../../beers-list-item";
import {NavLink} from "react-router-dom";

const BeersList = ({beers, favourites}) => {
	return (
			<div className="beer-list container">
				{
					beers.map(beer => {
						return (
							<NavLink key={beer.id} to={`/beer/${beer.id}`}>
								<BeersListItem beer={beer} favourites={favourites}/>
							</NavLink>
						)
					})
				}
			</div>
	)
};

export default BeersList;



