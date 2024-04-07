import { TEXT_LIST_DEFAULT } from './constants';

export class View {
	constructor({ onNewFilm, onClearList, onClickFilm, onUpdateData }) {
		this.inputNameFilmNode = document.getElementById('inputNameFilm');
		this.addFilmBtnNode = document.getElementById('addFilmButton');
		this.deleteFilmsBtnNode = document.getElementById('deleteFilmsBtn');
		this.filmListNode = document.getElementById('filmListHtml');
		this.window = document.defaultView;

		this.onNewFilm = onNewFilm;
		this.onClearList = onClearList;
		this.onClickFilm = onClickFilm;
		this.onUpdateData = onUpdateData;

		this.addFilmBtnNode.addEventListener('click', this._handleAddBtn);
		this.deleteFilmsBtnNode.addEventListener('click', this._handleDeleteBtn);
	}

	render(films) {
		films.forEach(film => {
			this.addFilm(film);
		});
	}

	addFilm(film) {
		const li = document.createElement('li');
		const input = document.createElement('input');
		const lable = document.createElement('lable');
		const paragraph = document.createElement('p');
		const div = document.createElement('div');
		const img = document.createElement('img');

		li.classList.add('list-films__item');

		input.classList.add('list-films__input');
		input.setAttribute('type', 'checkbox');
		input.id = film.id;

		lable.setAttribute('for', film.id);

		paragraph.classList.add('list-films__text');
		paragraph.innerText = film.title;

		div.id = film.id;
		div.classList.add('list-films__image-close');

		img.classList.add('list-films__icon-close');
		img.src = './src/images/close.svg';
		img.alt = 'кнопка удалить из списка';

		if (film.done) {
			li.classList.add('list-films__item--bg');
			lable.classList.add('label--checked');
			paragraph.classList.add('list-films--line-throgh');
		}

		div.append(img);

		li.append(input, lable, paragraph, div);

		this.filmListNode.append(li);
	}

	_handleAddBtn = () => {
		const input = this.inputNameFilmNode;

		const film = {
			title: this.inputNameFilmNode.value,
			status: 'active',
		};

		this.onNewFilm(film);

		this.inputClear(input);
	};

	_handleDeleteBtn = () => {
		this.onClearList();
	};

	inputClear(input) {
		input.value = '';
	}

	listInit() {
		this.filmListNode.innerText = TEXT_LIST_DEFAULT;
	}
}
