import React from 'react';
import {NavLink} from "react-router-dom";

import './beer-page.css';
import {abvColor, ebcColor, ibuLevel} from "../../../helpers-fn/style-helper";
import {DescriptionListItem} from "./index"

const BeerPage = (props) => {

	const {
		image, name, description, foodPairing, id,
		ebc, tagline, abv, ibu,
	} = props.beer;

	return (
		<div className="row justify-content-center">
			<div className="card mb-3 pt-4 pb-4">

				<div className="row no-gutters justify-content-around align-items-center">
					<div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
						<img src={image} className="card-img beer-page-image" alt="..."/>
						<NavLink to="/">
							<button type="button" className="btn btn-secondary home-btn mt-4">Back homepage</button>
						</NavLink>
					</div>
					<div className="col-md-8">
						<div className="card-body d-flex flex-column align-items-start">
							<div>
								<h5 className="card-title beer-page-name">{name}</h5>
								<p className="tagline">"{tagline}"</p>
							</div>
							<ul className="list-group beer-page-items-list ml-3">
								<DescriptionListItem
									label={"Alcohol"}
									className={`${abvColor(abv, 'bg')}`}
									value={`${abv}%`}/>

								<DescriptionListItem
									label={"Color saturation of malt"}
									value={ebc}
									style={{backgroundColor: ebcColor(ebc)}}/>

								<DescriptionListItem
									label={"Bitterness"}
									className={ibuLevel(ibu)}
									value={ibu}/>

							</ul>
							<h5 className="card-subtitle mt-3">Full description:</h5>
							<p className="card-text mt-2">{description}</p>
							<ul className="list-group list-group-horizontal-md">
								<li className="list-group-item bg-info food-pairing-list-item">Food pairing:</li>
								{foodPairing ? foodPairing.map(i => <li
									className="food-pairing-list-item m-0 list-group-item">{i}</li>) : null}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default BeerPage;