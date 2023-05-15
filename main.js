// Burger menu
const burger = document.getElementsByClassName('navbar-burger')[0]; // Find the burger
    // Add a click event on the burger
burger.addEventListener('click', function () {
    const menu = document.getElementById(burger.dataset.target); // Find the target menu
    burger.classList.toggle('is-active'); // Add or remove the is-active class on the burger
    menu.classList.toggle('is-active'); // Add or remove the is-active class on the menu
});

// Translate API
function translate() {
    const langSelect = document.getElementById('translator');
    const lang = langSelect.options[langSelect.selectedIndex].value;
    xhr.withCredentials = true;
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
        }
    });


// API translation
const data = 'q=English%20is%20hard%2C%20but%20detectably%20so';

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect');
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Accept-Encoding', 'application/gzip');
xhr.setRequestHeader('X-RapidAPI-Key', '3d5ce6dfb4mshaeeea817946dc73p17c499jsnd9561d07c12a');
xhr.setRequestHeader('X-RapidAPI-Host', 'google-translate1.p.rapidapi.com');

xhr.send(data);
}

  