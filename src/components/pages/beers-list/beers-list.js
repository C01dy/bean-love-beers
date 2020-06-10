import React from 'react';
import './beers-list.css';
import BeersListItem from "../beers-list-item";

const BeersList = ({beers}) => {
	return (
		<div className="beer-list container mt-4">
			{
				beers.map(beer => {
					return (
						<BeersListItem key={beer.id} beer={beer}/>
					)
				})
			}
		</div>
	)
};

export default BeersList;



