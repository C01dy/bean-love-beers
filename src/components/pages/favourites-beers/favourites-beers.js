import {NavLink} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import BeersListItem from "../../beers-list-item/beers-list-item";

const FavouriteBeers = ({favourites}) => {

	if (!favourites.length) {
		return (
			<div className="row justify-content-center mt-5">
				<h1 className="card-title">You not added beers to favourite</h1>
			</div>
		)
	}

	return (
		<div className="beer-list container">
			{
				favourites.map(beer => {
					return (
						<NavLink key={beer.id} to={`/beer/${beer.id}`}>
							<BeersListItem beer={beer}/>
						</NavLink>
					)
				})
			}
		</div>
	)
};

const mapStateToProps = ({favourites}) => {
	return {favourites}
};

export default connect(mapStateToProps)(FavouriteBeers);