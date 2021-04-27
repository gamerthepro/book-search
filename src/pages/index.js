
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
const elementBook = document.querySelector(".element");

//переменные для создания динамичкских карточек
const templateElement = document.querySelector('.element-template');
const listContenerCards = document.querySelector('.elements__contener')

//Динамические карточки
const initialCards = [ 
	{ 
		name: 'Архыз', 
		author: 'Архыз', 
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
		data: '21.03.2002',
		publisher: 'Новая Россия'

	}, 
	{ 
		name: 'Челябинская область', 
		author: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
		data: '21.03.2002',
		publisher: 'Новая Россия' 
	}, 
	{ 
		name: 'Иваново',
		author: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
		data: '21.03.2002' ,
		publisher: 'Новая Россия'
	}, 
	{ 
		name: 'Камчатка',
		author: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
		data: '21.03.2002',
		publisher: 'Новая Россия'
	}, 
	{ 
		name: 'Холмогорский район', 
		author: 'Холмогорский район', 
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
		data: '21.03.2002',
		publisher: 'Новая Россия' 
	}, 
	{ 
		name: 'Байкал', 
		author: 'Байкал', 
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
		data: '21.03.2002',
		publisher: 'Новая Россия'
	} 
]; 

//добавление карточек

function renderList() {
	const listItems = initialCards.map(composeItem);

		listContenerCards.append(...listItems);
}

function composeItem(item){
	const newItem = templateElement.content.cloneNode(true);
	const elemenImg = newItem.querySelector('.element__image');
	const elementTitle = newItem.querySelector('.element__title');
	const elementSubtitle = newItem.querySelector('.element__subtitle');
	elementTitle.textContent = item.name;
	elementSubtitle.textContent = item.author;
	elemenImg.src = item.link;
	elemenImg.alt = item.name + '.';
	const bookItem = newItem.querySelector('.element');
	bookItem.addEventListener('click', () => {
		openImgClick(item.link, item.name, item.author, item.data, item.publisher)
	});
	return newItem;
}

//Обработчики для popup__image
popupBookButtonClose.addEventListener('click', handleClosePopupBook);

//ОТкрытие попап book
function handleOpenPopupBook() {
	popupTypeBook.classList.add('popup__open');
}

//Закрытие попап book
function handleClosePopupBook() {
	popupTypeBook.classList.remove('popup__open');
}

//Функция открытия и заполнения поп-апа с изображением
function openImgClick(link, name, author, data, publisher) {
	handleOpenPopupBook(popupTypeBook);
	const popupImg = popupTypeBook.querySelector('.popup__img');
	const popupTitle = popupTypeBook.querySelector('.popup__title');
	const popupSubtitle = popupTypeBook.querySelector('.popup__subtitle');
	const popupData = popupTypeBook.querySelector('.popup__data');
	const popupPublisher = popupTypeBook.querySelector('.popup__publisher');
	popupImg.src = link;
	popupTitle.textContent = name;
	popupSubtitle.textContent = author;
	popupData.textContent = data;
	popupPublisher.textContent = publisher;
}

renderList();