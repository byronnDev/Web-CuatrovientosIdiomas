// Courses section
// Al dar click al subtitle is-active que se oculte o muestre el contenido de la sección con is-hidden
const subtitles = document.getElementsByClassName('subtitle is-active');
for (let i = 0; i < subtitles.length; i++) {
    subtitles[i].addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.classList.toggle('is-hidden');
    });
}


// More info button on the Course Details page
const infoIcons = document.getElementsByClassName('fa-calendar-days');
// Ponemos el raton como puntero
for (let i = 0; i < infoIcons.length; i++) {
    infoIcons[i].style.cursor = 'pointer';
    infoIcons[i].addEventListener('mouseover', function () {
        this.title = 'Show schedule';
    });
}
// Recorre todos los iconos de información
for (let i = 0; i < infoIcons.length; i++) {
    // Agrega un event listener para el evento de clic
    infoIcons[i].addEventListener('click', function () {
        // Encuentra el elemento padre que contiene el mensaje oculto
        const parentElement = this.parentNode.parentNode;

        // Encuentra el mensaje oculto dentro del elemento padre
        const messageBody = parentElement.querySelector('.message-body');

        // Alterna la visibilidad del mensaje oculto agregando o quitando la clase 'is-hidden'
        messageBody.classList.toggle('is-hidden');
    });
}

// More info button on the Course Details page in FAQ section
let collection = document.getElementsByClassName("is-faq");
Array.from(collection).forEach(element => {
    element.addEventListener("mousedown", function () {
        if (element.getElementsByClassName("card-content")[0].classList.contains("is-hidden")) {
            element.getElementsByClassName("card-content")[0].classList.remove("is-hidden");
        } else {
            element.getElementsByClassName("card-content")[0].classList.add("is-hidden");
        }
    });
    // mouseover
    element.addEventListener("mouseover", function () {
        element.style.cursor = "pointer";
    });
});

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

