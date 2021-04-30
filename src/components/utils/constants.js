//Api
const apiConfig = {
	url: "https://openlibrary.org/search.json?q=",
}

const errorApi = err => {
	console.error(err);
	};

//переменныйе для поисковика
const buttonSearch = document.querySelector('.search__button');

const popupTypeBook = document.querySelector('.popup_type_book');
const popupBookButtonClose = document.querySelector(".popup__close_book");

//Переменные для popup_img
const templateElement = '.element-template';

//переменные для создания динамичкских карточек
const listContenerCards = document.querySelector('.elements__contener')

export {
	apiConfig,
	errorApi,
	buttonSearch,
	popupTypeBook,
	popupBookButtonClose,
	templateElement,
	listContenerCards
}