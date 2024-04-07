import { Controller } from './controller.js';

const app = new Controller();

app.init();

// function getElementHTML(film, index) {
// 	return `
// 		<li class="list-filmsIds__item ${film.complited ? 'list-filmsIds__item--bg' : ''}">
// 			<input
// 				id="inputCheckMovies"
// 				class="list-filmsIds__input"
// 				type="checkbox"
// 			/>
// 			<label data-type="toggle" data-index="${index}" class="${
// 		filmsIds.complited ? 'label--checked' : ''
// 	}" for="inputCheckMovies"></label>
// 			<p id="textFilmName" class="list-filmsIds__text ${
// 				filmsIds.complited ? 'list-filmsIds--line-throgh' : ''
// 			}">${filmsIds.title}</p>
// 			<div data-type="remove" data-index="${index}" class="list-filmsIds__image-close">
// 				<img
// 					data-type="remove"
// 					data-index="${index}"
// 					class="list-filmsIds__icon-close"
// 					src="./images/close.svg"
// 					alt="кнопка удалить из списка"
// 					/>
// 					</div>
// 			</li>`;
// }
