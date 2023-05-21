//animation firehip
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }else
      {
        entry.target.classList.remove('show');
      }

    });
  });

  const hiddenElements = document.querySelectorAll('.hide');
  hiddenElements.forEach((element) => observer.observe(element));

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: "en" }, "google_translate_element");
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
      setInterval(checkAndHideElement, 10);

// FAQ section
var readMoreButton = document.getElementById('readMoreButton');
var faqElements = document.getElementsByClassName('is-faq');

if (readMoreButton && faqElements.length > 0) {
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
}

// Courses section
const subtitles = document.getElementsByClassName('subtitle is-active');
for (let i = 0; i < subtitles.length; i++) {
    subtitles[i].addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.classList.toggle('is-hidden');
    });
}


// More info button on the Course Details page
const calendarIcons = document.getElementsByClassName('fa-calendar-days');
for (let i = 0; i < calendarIcons.length; i++) {
    calendarIcons[i].style.cursor = 'pointer';
    calendarIcons[i].addEventListener('mouseover', function () {
        this.title = 'Show schedule';
    });
}

for (let i = 0; i < calendarIcons.length; i++) {
    calendarIcons[i].addEventListener('click', function () {
        const parentElement = this.parentNode.parentNode;
        const messageBody = parentElement.querySelector('.message-body');

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
const burger = document.getElementsByClassName('navbar-burger')[0];
burger.addEventListener('click', function () {
    const menu = document.getElementById(burger.dataset.target);
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});
