import React from 'react';
import './beer-page.css';
import {abvColor, ebcColor} from "../../../helpers-fn/style-helper";
import {DescriptionItem} from "./index"

const BeerPage = (props) => {

	const {
		ingredients,
		image, name, description,
		ebc, tagline, abv} = props.beer;

	return (
		<div className="row justify-content-center">
			<div className="card mb-3 pt-4 pb-4">
				<div className="row no-gutters justify-content-around">
					<div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
						<img src={image} className="card-img beer-page-image" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body d-flex flex-column align-items-start">
							<span>
								<h5 className="card-title beer-page-name">{name}</h5>
								<p className="tagline">"{tagline}"</p>
								{console.log(ingredients)}
							</span>
							<ul className="list-group beer-page-items-list ml-3">

								<DescriptionItem
									label={"Alcohol"}
									className={`${abvColor(abv, 'bg')}`}
									value={`${abv}%`}/>

									<DescriptionItem
										label={"Color saturation of malt"}
										value={ebc}
										style={{backgroundColor: ebcColor(ebc)}}/>

								<li>Morbi leo risus</li>
								<li>Porta ac consectetur ac</li>
								<li>Vestibulum at eros</li>
							</ul>
							<h5 className="card-subtitle mt-3">Full description:</h5>
							<p className="card-text mt-2">{description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default BeerPage;