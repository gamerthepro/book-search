import './index.css';

import Card from '../components/Card.js'
import Api from '../components/Api.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';

import {
	apiConfig,
	errorApi,
	buttonSearch,
	popupTypeBook,
	popupBookButtonClose,
	templateElement,
	listContenerCards
} from '../components/utils/constants.js';

//API
const api = new Api(apiConfig);

//Обработчики для popup__image
popupBookButtonClose.addEventListener('click', () => closePopup(popupTypeBook));

//обработчик поисковика
buttonSearch.addEventListener('click', () => {
	api.getCardList()
	.then(item => {
		cardSection.render(item.docs)
	})
	.catch(errorApi)
	}
)

//Создание попапа изображения 
const popupImg = new PopupWithImage(popupTypeBook);
popupImg.setEventListeners();

//Создание новой карточки
const handleCardClick = (data) => {
	popupImg.open(data);
};

//Создание новой карточки
const createCard = item => {
	const card = new Card({...item}, templateElement, handleCardClick);
	const cardElement = card.generateCard();
	return cardElement;
}

//Создание списка карточек
const cardSection = new Section ({
	renderer: (item) => {
		cardSection.addItem(createCard(item))
	}
},

listContenerCards);