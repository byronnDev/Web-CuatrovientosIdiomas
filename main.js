
// FAQ section
var readMoreButton = document.getElementById('readMoreButton');
var faqElements = document.getElementsByClassName('is-faq');

readMoreButton.addEventListener('click', function() {
  if (!readMoreButton.classList.contains('was-opened')) {
    for (var i = 0; i < faqElements.length; i++) {
      faqElements[i].classList.remove('is-hidden');
    }
    readMoreButton.classList.add('was-opened');
    readMoreButton.textContent = 'Read Less...';
  } else {
    for (var i = 5; i < faqElements.length; i++) {
      faqElements[i].classList.add('is-hidden');
    }
    readMoreButton.classList.remove('was-opened');
    readMoreButton.textContent = 'Read More...';
  }
});
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
const calendarIcons = document.getElementsByClassName('fa-calendar-days');
// Ponemos el raton como puntero
for (let i = 0; i < calendarIcons.length; i++) {
    calendarIcons[i].style.cursor = 'pointer';
    calendarIcons[i].addEventListener('mouseover', function () {
        this.title = 'Show schedule';
    });
}
// Recorre todos los iconos de información
for (let i = 0; i < calendarIcons.length; i++) {
    // Agrega un event listener para el evento de clic
    calendarIcons[i].addEventListener('click', function () {
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
            element.getElementsByClassName("fas")[0].classList.toggle("fa-rotate-180");
        } else {
            element.getElementsByClassName("card-content")[0].classList.add("is-hidden");
            element.getElementsByClassName("fas")[0].classList.toggle("fa-rotate-180");
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
document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('#translator select');

    selectElement.addEventListener('change', function (event) {
        const selectedLanguage = event.target.value;
        translatePage(selectedLanguage);
    });
});

function translatePage(language) {
    const textElements = document.querySelectorAll('[data-translate]');
    const apiKey = 'TU_CLAVE_DE_API';

    textElements.forEach(function (element) {
        const originalText = element.dataset.translate;
        translateText(originalText, language, apiKey)
            .then(function (translatedText) {
                element.textContent = translatedText;
            })
            .catch(function (error) {
                console.error('Error de traducción:', error);
            });
    });
}

// Function to translate text
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
    )
};

function checkAndHideElement() {
    var element = document.querySelector('#\\:1\\.container');
    if (element) {
        element.style.visibility = 'hidden';
    }
    var targetLanguageDiv = document.getElementById(':0.targetLanguage');
    if (targetLanguageDiv) {
        while (targetLanguageDiv.nextSibling) {
            targetLanguageDiv.nextSibling.remove();
        }
    }
}
setInterval(checkAndHideElement, 1000);