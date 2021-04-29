const onPromise = res => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка: ${res.status}`);
}

export default class Api {
		constructor({ url }) {
		this._url = url;
	}

	getCardList() {
		return fetch(`${this._url}`+document.getElementById("input").value)
		.then(onPromise)
	}
}