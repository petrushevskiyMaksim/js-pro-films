import { v4 as uuidv4 } from 'uuid';

export class Model {
	constructor({}) {
		this.films = [];
	}

	update(films) {
		this.films = films;
	}

	add(film) {
		this.films.push(film);
	}

	get() {
		return this.films;
	}

	clear() {
		this.films = [];
	}
}
