//Looks for hidden elements and shows them when they are loaded on screen and applies a fade in effect in consequence
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }

  });
});
const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((element) => observer.observe(element));

//Intilaize google Translate SelectBox
function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: "en" }, "google_translate_element");
};

//Hides the google translate element
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
//Checks if the google translate element is re-created and hides it on an interval
setInterval(checkAndHideElement, 10);

//Checks if readMore and Faqs exist if so wai for click and toggle classes
var readMoreButton = document.getElementById('readMoreButton');
var faqElements = document.getElementsByClassName('is-faq');
if (readMoreButton && faqElements.length > 0) {
  readMoreButton.addEventListener('click', function () {
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
}

//Waits for DOM to load and hides the arrow
window.addEventListener("DOMContentLoaded", function () {
  var elemento = document.getElementById("flecha");
  elemento.style.display = "none";
});

//Detects page offsets and hides or shows the arrow in consequence
window.addEventListener("scroll", function () {
  var elemento = document.getElementById("flecha");
  if (window.pageYOffset >= 650) {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
});

// MIKEL
// Muestra el contenido de los Niveles de Inglés y Francés
const subtitles = document.getElementsByClassName('subtitle is-active'); // Get all the subtitles that are active
for (let i = 0; i < subtitles.length; i++) {
  subtitles[i].addEventListener('click', function () {
    const content = this.nextElementSibling; // Obtiene el siguiente elemento del subtitle
    content.classList.toggle('is-hidden'); // Toggle the class is-hidden
  });
}
// When calendar icon is hovered show title
const calendarIcons = document.getElementsByClassName('fa-calendar-days');
for (let i = 0; i < calendarIcons.length; i++) {
  calendarIcons[i].style.cursor = 'pointer'; // Change the cursor to pointer
  calendarIcons[i].addEventListener('mouseover', function () {
    this.title = 'Show schedule'; // Set the title
  });
}
// When calendar icon is clicked toggle classes for the one clicked
for (let i = 0; i < calendarIcons.length; i++) {
  calendarIcons[i].addEventListener('click', function () {
    const parentElement = this.parentNode.parentNode; // El padre del padre del icono
    const messageBody = parentElement.querySelector('.message-body'); // Get the message body

    messageBody.classList.toggle('is-hidden'); // Toggle the class is-hidden
  });
}

// FAQs
// When calendar icon is clicked toggle classes for the one clicked
let collection = document.getElementsByClassName("is-faq"); // Get all the faq elements
Array.from(collection).forEach(element => { // For each element add the event listener
  element.addEventListener("mousedown", function () {
    if (element.getElementsByClassName("card-content")[0].classList.contains("is-hidden")) {
      // Muestra el contenido y rota la flecha
      element.getElementsByClassName("card-content")[0].classList.remove("is-hidden");
      element.getElementsByClassName("fas")[0].classList.toggle("fa-rotate-180");
    } else {
      // Oculta el contenido y rota la flecha
      element.getElementsByClassName("card-content")[0].classList.add("is-hidden");
      element.getElementsByClassName("fas")[0].classList.toggle("fa-rotate-180");
    }
  });
  element.addEventListener("mouseover", function () {
    element.style.cursor = "pointer"; // Cambia el cursor a pointer
  });
});

// Listen for click on navbar burger and toggle classes
const burger = document.getElementsByClassName('navbar-burger')[0]; // Get the burger element [0] because it's the only one
burger.addEventListener('click', function () {
  const menu = document.getElementById(burger.dataset.target); // Get the menu element by the id
  burger.classList.toggle('is-active'); // Toggle the class is-active for the burger
  menu.classList.toggle('is-active'); // Toggle the class is-active for the menu
});
