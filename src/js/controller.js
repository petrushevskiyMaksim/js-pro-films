import { Model } from './model';
import { View } from './view';
import { Storage } from './storage';

export class Controller {
	constructor() {
		this.model = new Model({});

		this.view = new View({
			onNewFilm: this.handleNewFilm,
			onClearList: this.handleClearList,
		});

		this.storage = new Storage();
	}

	init() {
		this.storage.pull().then(films => {
			if (films.length !== 0) {
				this.model.update(films);
				this.view.render(this.model.get());
			} else {
				this.view.listInit();
			}
		});
	}

	handleNewFilm = film => {
		this.model.add(film);

		this.view.addFilm(film);

		this.storage.push(film);
	};

	handleClearList = () => {
		this.storage.delete(this.model.get());

		this.model.clear();

		this.view.render(this.model.get());

		this.view.listInit();
	};
}
