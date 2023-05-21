// showHelp for English level
function showHelp() {
  const helpText = document.getElementById('help');
  helpText.classList.toggle('is-hidden');
}


import {
  stripe,
  dangerOnValidationAppender,
  dangerOnValidationAppenderRadio,
  dangerOnValidationRemover,
  validateForm,
  validateForm1,
  inputChecker,
  clearSelectBoxOnChange,
  clearCheckboxOnChange,
  clearRadiosOnChecked,
  updatePriceText,
  handleSelection
} from "./helpers.js";


const productsData = {
  "01": {
    "productId": "price_1N2zMdASksDI5wteY4NTvonC",
    "price": "75",
  },
  "02": {
    "productId": "price_1N2zM3ASksDI5wtehOpnso4v",
    "price": "50",
  },
  "03": {
    "productId": "price_1N2zLEASksDI5wteR34yl20j",
    "price": "380",
  },
  "04": {
    "productId": "price_1N2zMPASksDI5wteK8UZaOO4",
    "price": "550",
  },
  "05": {
    "productId": "price_1N9sQiASksDI5wteP4k37jxM",
    "price": "46",
  },
  "06": {
    "productId": "price_1N9sR3ASksDI5wtevrRHcwJ5",
    "price": "86",
  },
  "07": {
    "productId": "price_1N9sRMASksDI5wteILtT3Zmm",
    "price": "96",
  },
  "08": {
    "productId": "price_1N9sRlASksDI5wtex6xWU1zC",
    "price": "120",
  },

};


const coursesData = {
  "04": {
    "hours": "15:30 a 16:30",
    "course": "Inglés A2 Refuerzo estudiantes FP",
    "days": "Lunes y miércoles",
    "price": "380 € ó 50 € mes"
  },
  "05": {
    "hours": "16:30 a 18:00",
    "course": "Inglés A2",
    "days": "Lunes y miércoles",
    "price": "550 € ó 75 € mes"
  },
  "08": {
    "hours": "18:00 a 19:30",
    "course": "Inglés B1.1",
    "days": "Lunes y miércoles",
    "price": "550 € ó 75 € mes"
  },
  "09": {
    "hours": "16:30 a 18:00",
    "course": "Inglés B1.2",
    "days": "Martes y jueves",
    "price": "550 € ó 75 € mes"
  },
  "10": {
    "hours": "15:30 a 16:30",
    "course": "Inglés B1 Refuerzo estudiantes FP",
    "days": "Martes y jueves",
    "price": "380 € ó 50 € mes"
  },
  "11": {
    "hours": "15:30 a 16:30",
    "course": "Inglés B1 Preparación Examen Oficial estudiantes FP",
    "days": "Lunes y miércoles",
    "price": "380 € ó 50 € mes"
  },
  "12": {
    "hours": "18:00 a 19:30",
    "course": "Inglés B1 Preparación Examen Oficial",
    "days": "Lunes y miércoles",
    "price": "550 € ó 75 € mes"
  },
  "13": {
    "hours": "19:30 a 21:00",
    "course": "Inglés B2.1",
    "days": "Lunes y miércoles",
    "price": "550 € ó 75 € mes"
  },
  "14": {
    "hours": "9:30 a 11:00",
    "course": "Inglés B2.1",
    "days": "Martes y jueves",
    "price": "550 € ó 75 € mes"
  },
  "15": {
    "hours": "16:30 a 18:00",
    "course": "Inglés B2.2",
    "days": "Lunes y miércoles",
    "price": "550 € ó 75 € mes"
  },
  "16": {
    "hours": "15:30 a 16:30",
    "course": "Inglés B2 Preparación Examen Oficial estudiantes FP",
    "days": "Martes y jueves",
    "price": "380 € ó 50 € mes"
  },
  "17": {
    "hours": "18:00 a 19:30",
    "course": "Inglés B2 Preparación Examen Oficial",
    "days": "Martes y jueves",
    "price": "550 € ó 75 € mes"
  }
};

const radioSets = document.querySelectorAll('[data-radio-set]');
const requiredInputs = document.querySelectorAll('.validation_basic');
const dni = document.getElementById('dni_validation');
const phoneNumber = document.getElementById('phone_validation');
const email = document.getElementById('email_validation');
const birth = document.getElementById('birth_validation');
const enrollment = document.getElementById('enrollment_validation');
const fileInput = document.querySelector('#file-js-example input[type=file]');
const selectFPCourse = document.getElementsByName('coursesFP');
const oldStudent = document.getElementsByName('old_student');
const formUserDetails = document.querySelector('form[name="user_details"]');
const formUserCourseDetails = document.querySelector('form[name="user_course_details"]');
const courseWeekdaysRadio = document.getElementsByName('course_weekdays');
const typeOfPaymentRadio = document.getElementsByName('payment_type');
const courseHoursSelectBox = document.getElementsByName('courseHours');
const englishCourseSelectBox = document.getElementsByName('englishCourse');
const returnBtn = document.getElementById('returnBtn');
const policiesCheckbox = document.getElementsByClassName('checkbox');
const courseSelect = document.getElementById("course");
const paymentTypeInputs = document.querySelectorAll('.field input[name="payment_type"]');
const courseSelected = document.querySelector('select[name="englishCourse"]');
const courseWeekdays = document.querySelector('input[name="course_weekdays"]');
const courseHours = document.querySelector('select[name="courseHours"]');
const coursePaymentType = document.querySelector('input[name="payment_type"]');
let totalFilesSelected = 0;
let paymentTypeGlobal = 0;
let newElement;
let currentItemSelected;
let hasUserDoneFP = true;

// RAW Function calls
clearRadiosOnChecked(courseWeekdaysRadio);

clearRadiosOnChecked(typeOfPaymentRadio);

clearSelectBoxOnChange(courseHoursSelectBox);

clearSelectBoxOnChange(englishCourseSelectBox);

clearCheckboxOnChange(policiesCheckbox);

clearSelectBoxOnChange(selectFPCourse);

clearRadiosOnChecked(oldStudent);

//Functionalities on vars gotten from DOM

radioSets.forEach(function (set) {
  const radioButtons = set.querySelectorAll('.radioUpgraded');

  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("change", function () {
      const label = radioButton.nextElementSibling;

      set.querySelectorAll(".button").forEach(function (label) {
        label.classList.add("is-light");
      });

      label.classList.remove("is-light");
    });
  });
});

fileInput.onchange = () => {
  if (fileInput.files.length > 0) {
    totalFilesSelected++;
    dangerOnValidationRemover(fileInput.parentNode);
    dangerOnValidationRemover(fileInput.parentNode.parentNode);
    const fileName = document.querySelector('#file-js-example .file-name');
    fileName.textContent = fileInput.files[0].name;
  }
};

paymentTypeInputs.forEach((input) => {
  input.addEventListener('click', () => {
    if (document.getElementById('radioCustom6').checked) {
      paymentTypeGlobal = 1;
    } else {
      paymentTypeGlobal = 0;
    }
    currentItemSelected = updatePriceText(newElement, courseSelect, courseHours, coursesData, paymentTypeGlobal, currentItemSelected);
  });
});

//Listeners

formUserDetails.addEventListener('submit', (event) => {
  event.preventDefault();

  let isFormValid = validateForm(totalFilesSelected, fileInput, dni, email, phoneNumber, birth, enrollment);

  if (isFormValid) {
    formUserDetails.classList.add('is-hidden');
    formUserCourseDetails.classList.remove('is-hidden');

    if (selectFPCourse[0].value === '') {   
      hasUserDoneFP = false;
    }else
    {
      hasUserDoneFP = true;
    }
  }
});

formUserCourseDetails.addEventListener('submit', (event) => {
  event.preventDefault();

  let isFormValid = validateForm1();

  if (isFormValid) {
    stripe(currentItemSelected, productsData);
  }
});

returnBtn.addEventListener('click', (event) => {
  event.preventDefault();
  formUserCourseDetails.classList.add('is-hidden');
  formUserDetails.classList.remove('is-hidden');
});

courseSelected.addEventListener('change', () => {
  currentItemSelected = updatePriceText(newElement, courseSelect, courseHours, coursesData, paymentTypeGlobal);
});

courseSelect.addEventListener('change', (event) => {
  const selectedCourse = event.target.value;
  newElement = document.createElement("p");

  for (const courseId in coursesData) {
    const course = coursesData[courseId];
    if (course.course === selectedCourse) {
      const text = document.createTextNode(course.price.split("ó")[paymentTypeGlobal]);
      newElement.appendChild(text);
      break;
    }
  }

  if (courseSelect.nextElementSibling !== null) {
    courseSelect.parentNode.removeChild(courseSelect.nextElementSibling);
  }

  courseSelect.parentNode.appendChild(newElement);
  currentItemSelected = updatePriceText(newElement, courseSelect, courseHours, coursesData, paymentTypeGlobal, currentItemSelected);
});

courseWeekdays.addEventListener('change', function () {
  handleSelection(courseWeekdays, courseHours, coursePaymentType, courseSelect, coursesData, hasUserDoneFP, courseWeekdaysRadio);
  currentItemSelected = updatePriceText(newElement, courseSelect, courseHours, coursesData, paymentTypeGlobal);
});

courseHours.addEventListener('change', function () {
  handleSelection(courseWeekdays, courseHours, coursePaymentType, courseSelect, coursesData, hasUserDoneFP, courseWeekdaysRadio);
  currentItemSelected = updatePriceText(newElement, courseSelect, courseHours, coursesData, paymentTypeGlobal);
});

coursePaymentType.addEventListener('change', function () {
  handleSelection(courseWeekdays, courseHours, coursePaymentType, courseSelect, coursesData, hasUserDoneFP, courseWeekdaysRadio);
  currentItemSelected = updatePriceText(newElement, courseSelect, courseHours, coursesData, paymentTypeGlobal);
});