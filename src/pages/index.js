import './index.css';

import Card from '../components/Card.js'
import {initialCards} from '../components/utils/Initial-сards.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';

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
const templateElement = '.element-template';


//переменные для создания динамичкских карточек
const listContenerCards = document.querySelector('.elements__contener')

//Создание попапа изображения 
const popupBook = new PopupWithImage(popupTypeBook);
popupBook.setEventListeners();

//Создание новой карточки
const handleCardClick = data => {
	popupBook.open(data);
};

const createCard = item => {
	const card = new Card(item, templateElement, handleCardClick);
	const cardElement = card.generateCard();
	return cardElement;
}

const renderCards = new Section ({
	items: initialCards,
	renderer: (item) => {
		const cardElement = createCard(item);
		renderCards.addItem(cardElement);
	}
},
listContenerCards);
	
renderCards.render();