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

	getAllBeer = async () => {
		const res = await this.getResource('beers');
		return res.map(this._transformBeers);
	};

	getBeer = async (id) => {
		const res = await this.getResource(`beers/${id}`);
		return this._transformBeer(res[0])
	};

	_transformBeers(beers) {
		return {
			name: beers.name,
			tagline: beers.tagline,
			value: beers.boil_volume.value,
			unit: beers.boil_volume.unit,
			abv: beers.abv, // Крепкость
			id: beers.id,
			image: beers.image_url,
			description: beers.description,
			firstBrewed: beers.first_brewed,
		}
	}

	_transformBeer(beer) {
		return {
      name: beer.name,
			id: beer.id,
      tagline: beer.tagline,
			description: beer.description,
      value: beer.boil_volume.value,
      unit: beer.boil_volume.unit,
      abv: beer.abv, // крепкость
      ebc: beer.ebc, // насыщенность цвета
			ingredients: beer.ingredients,
			firstBrewed: beer.first_brewed
    }
	}
}
