
export default class PunkBeerService {
    _rootURL = 'https://api.punkapi.com/v2/';

    getResource= async (url) => {
        const res = await fetch(`${this._rootURL}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        } else {
            return res.json()
        }
    };

    getAllBeers = async () => {
        const res = await this.getResource('beers');
        return res;
    };

    getBeer = async (id) => {
        const res = await this.getResource(`beers/${id}`)
        return res;
    }
}
