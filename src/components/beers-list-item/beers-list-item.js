import React from 'react';
import './beers-list-item.css'
import {abvColor} from "../../helpers-fn/style-helper";
import {connect} from "react-redux";
import {toggleFavBeer} from "../../actions";

const BeersListItem = (props) => {

	const {
		name, description, id,
		abv, image, firstBrewed,
	} = props.beer;

	const onAddedToFavourite = e => {
		e.preventDefault()
		props.toggleFavBeer(id)
	};

	const isFav = () => {
		const fav = props.favourites.findIndex(item => item.id === id);
		if (fav > -1) {
			return 'active'
		} else {
			return ''
		}
	}

	return (
		<div className="card mb-3 beer-list-item btn">
			<div className="row no-gutters beers-info">
				<p className={`m-0 abv ${abvColor(abv, 'text')}`}>
					Alcohol: {abv}%
				</p>
				<p className="brewed">
					First brewed: {firstBrewed}
				</p>
				<i onClick={onAddedToFavourite}
				   className={`fas fa-star item-cart-icon btn btn-outline-info ${isFav()}`}>
				</i>
			</div>
			<div className="row no-gutters align-items-center">
				<div className="col-md-4 item-left-col">
					<img src={image} className="card-img beer-image" alt="..."/>
				</div>
				<div className="col-md-8">
					<div className="card-body beers-content">
						<span>
							<h5 className="card-title beer-name">{name}</h5>
						</span>
						<p className="card-text beer-description">{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
};

const mapDispatchToProps = {
	toggleFavBeer,
};

export default connect(null, mapDispatchToProps)(BeersListItem);