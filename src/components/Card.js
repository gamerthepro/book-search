export default class Card {

	constructor(data, cardSelector, handleCardClick ) {
		this._name = data.title;
		this._isbn = data.isbn[1];
		this._link = 'http://covers.openlibrary.org/b/isbn/';
		this._author = data.author_name;
		this._data = data.publish_date[0];
		this._publisher = data.publisher;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
	}

	// Создание разметки
	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);

		return cardElement;
	}

	//Генерация карточек по шаблону
	generateCard() {
		this._element =  this._getTemplate();
		this._elemenImg = this._element.querySelector('.element__image');
		this._setEventListener();
		this._element.querySelector('.element__title').textContent = this._name;
		this._element.querySelector('.element__subtitle').textContent = this._author;
		this._elemenImg.src = this._link + this._isbn + "-L.jpg";
		this._elemenImg.alt = this._name + '.';

		return this._element;
	}

	_setEventListener() {
		this._elemenImg.addEventListener('click', () => {
			const data = {
				name: this._name,
				link: this._link + this._isbn + "-L.jpg",
				author: this._author,
				data: this._data,
				publisher: this._publisher
			}
			this._handleCardClick(data);
		});
	};
}