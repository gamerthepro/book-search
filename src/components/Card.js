export class Card {

	constructor(data, cardSelector, openImgClick) {
		this._name = data.name;
		this._link = data.link;
		this._author = data.author;
		this._data = data.data;
		this._publisher = data.publisher;
		this._cardSelector = cardSelector;
		this._openImgClick = openImgClick;
	}

	// Создание разметки
	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);

		return cardElement;
	}

	//Генерация карточек по шаблону
	generateCard(){
		this._element =  this._getTemplate();
		this._elemenImg = this._element.querySelector('.element__image');
		this._setEventListener();
		this._element.querySelector('.element__title').textContent = this._name;
		this._element.querySelector('.element__subtitle').textContent = this._author;
		this._elemenImg.src = this._link;
		this._elemenImg.alt = this._name + '.';

		return this._element;
	}

	_setEventListener() {
		const bookItem = this._element.querySelector('.element');
		bookItem.addEventListener('click', () => {
		this._openImgClick(this._name, this._link, this._author, this._data, this._publisher)
	});
	};
}