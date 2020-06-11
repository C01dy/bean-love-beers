import React from 'react';
import './beers-list-item.css'
import {abvColor} from "../../helpers-fn/style-helper";

const BeersListItem = (props) => {

	const {
		name, description,
		abv, image, firstBrewed
	} = props.beer;

	const f = (e) => {
		e.preventDefault();
		console.log("hey")
	};

	return (
		<div className="card mb-3 beer-list-item btn">
			<div className="row no-gutters beers-info">
				<p className={`m-0 abv ${abvColor(abv, 'text')}`}>
					Alcohol: {abv}%
				</p>
				<p className="brewed">
					First brewed: {firstBrewed}
				</p>
				<i onClick={f} className="fas fa-star item-cart-icon btn btn-outline-info"></i>
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

export default BeersListItem;