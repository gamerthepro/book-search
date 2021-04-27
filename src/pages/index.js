import {Card} from '../components/Card.js'
import {initialCards} from '../components/utils/Initial-сards.js';
// function getBooks() {
// 	document.getElementById("output").innerHTML="";
// 	fetch("https://openlibrary.org/search.json?q="+document.getElementById("input").value)
// 	.then(res => res.json())
// 	.then(response => {
// 		for(const i=0; i<9; i++){
// 			document.getElementById("output").innerHTML+="<h2>"+response.docs[i]
// 			.title+"</h2>"+response.docs[i]
// 			.author_name[0]+"<img src='https://openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'>";
// 		}
// 	});
// }
const popupTypeBook = document.querySelector('.popup_type_book');
const popupBookButtonClose = document.querySelector(".popup__close_book");

//Переменные для popup_img
const popupImg = popupTypeBook.querySelector('.popup__img');
const popupTitle = popupTypeBook.querySelector('.popup__title');
const popupSubtitle = popupTypeBook.querySelector('.popup__subtitle');

//переменные для создания динамичкских карточек
const listContenerCards = document.querySelector('.elements__contener')

//Обработчики для popup__image
popupBookButtonClose.addEventListener('click', () => closePopup(popupTypeBook));

//ОТкрытие попап book
function openPopup(popup) {
	popup.classList.add('popup__open');
	document.addEventListener('keydown', handleEscPress);
	document.addEventListener('mousedown', handleOverlayClick);
}

//Закрытие попап book
function closePopup(popup) {
	popup.classList.remove('popup__open');
	document.addEventListener('keydown', handleEscPress);
	document.addEventListener('mousedown', handleOverlayClick);
}

//Обработчик закрытия попап по нажатию Esc
function  handleEscPress(evt) {
	if(evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup__open');
		closePopup(openedPopup);
	};
}

//Обработчик закрытия попап по клику на overlay
function handleOverlayClick(evt) {
	if(evt.target.classList.contains('popup__open')){
		closePopup(evt.target); 
	};
}

//Функция открытия и заполнения поп-апа с изображением
function openImgClick(name, link, author, data, publisher) {
	openPopup(popupTypeBook);
	const popupData = popupTypeBook.querySelector('.popup__data');
	const popupPublisher = popupTypeBook.querySelector('.popup__publisher');
	popupImg.src = link;
	popupImg.alt = name;
	popupTitle.textContent = name;
	popupSubtitle.textContent = author;
	popupData.textContent = data;
	popupPublisher.textContent = publisher;
}

//Создание новой карточки
function createCard(data) {
	const card = new Card({name: data.name, link: data.link, author: data.author, data: data.data, publisher: data.publisher}, '.element-template', openImgClick);
	const cardElement = card.generateCard();
	return cardElement;
}

//Создание списка карточек
initialCards.forEach((item) => {
	const cardElement = createCard(item);
	listContenerCards.append(cardElement);
});