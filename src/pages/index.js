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