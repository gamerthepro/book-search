import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
	constructor (popupNode) {
		super(popupNode);
		this._popupImg = this._popup.querySelector('.popup__img');
		this._popupTitle = this._popup.querySelector('.popup__title');
		this._popupSubtitle = this._popup.querySelector('.popup__subtitle');
		this._popupData = this._popup.querySelector('.popup__data');
		this._popupPublisher = this._popup.querySelector('.popup__publisher')
	}

	open({name, link, author, data, publisher}) {
		this._popupImg.src = link;
		this._popupImg.alt = name + '.';
		this._popupTitle.textContent = name;
		this._popupSubtitle.textContent = author;
		this._popupData.textContent = data;
		this._popupPublisher.textContent = publisher;
		super.open();
	}
}