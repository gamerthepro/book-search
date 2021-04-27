//ОТкрытие попап book
const elementBook = document.querySelector(".element");
const popupBook = document.querySelector(".popup");

elementBook.addEventListener('click', () => {
	popupBook.classList.add('popup__open');
});

//Закрытие попап book
const popupBookButtonClose = document.querySelector(".popup__close_book");

popupBookButtonClose.addEventListener('click', () => {
	popupBook.classList.remove('popup__open');
});


function getBooks() {
	document.getElementById("output").innerHTML="";
	fetch("https://openlibrary.org/search.json?q="+document.getElementById("input").value)
	.then(res => res.json())
	.then(response => {
		for(const i=0; i<9; i++){
			document.getElementById("output").innerHTML+="<h2>"+response.docs[i]
			.title+"</h2>"+response.docs[i]
			.author_name[0]+"<img src='https://openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'>";
		}
	});
}