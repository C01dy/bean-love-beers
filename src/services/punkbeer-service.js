export default class PunkbeerService {
	_rootURL = 'https://api.punkapi.com/v2/';

	getResource = async (url) => {
		const res = await fetch(`${this._rootURL}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		} else {
			return res.json()
		}
	};

	getAllBeer = async (pageNum = 1) => {
		const res = await this.getResource(`beers?page=${pageNum}&per_page=25`);
		return res.map(this._transformBeers);
	};

	getBeer = async (id) => {
		const res = await this.getResource(`beers/${id}`);
		return this._transformBeer(res[0])
	};

	searchBeer = async (name) => {
		const res = await this.getResource(`beers/?beer_name=${name}`);
		return res.map(this._transformBeers)
	};

	_transformBeers(beers) {
		return {
			name: beers.name,
			abv: beers.abv, // Крепкость
			id: beers.id,
			image: beers.image_url,
			description: beers.description,
			firstBrewed: beers.first_brewed,
			favourite: false
		}
	}

	_transformBeer(beer) {
		return {
      name: beer.name,
			id: beer.id,
      tagline: beer.tagline,
			description: beer.description,
      abv: beer.abv, // крепкость
      ebc: beer.ebc, // насыщенность цвета
			firstBrewed: beer.first_brewed,
			image: beer.image_url,
			ibu: beer.ibu,
			foodPairing: beer.food_pairing,
    }
	}
}
