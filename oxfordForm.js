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
    handleSelection,
    validateFormOxford
  } from "./helpers.js";

  const formOxfordDetails = document.querySelector('form[name="oxfordDetails"]'); // Oxford form
  const requiredInputs = document.querySelectorAll('.validation_basic'); // All required inputs w .validation_basic class
  const dni = document.getElementById('dni_validation'); // DNI input
  const email = document.getElementById('email_validation'); // Email input
  const phoneNumber = document.getElementById('phone_validation'); //Phone number input
  const selectFPCourse = document.getElementsByName('coursesFP'); // Select box for FP courses
    const underage = document.getElementsByName('underage'); // Radio buttons for old student
    const radioSets = document.querySelectorAll('[data-radio-set]');
    

  clearSelectBoxOnChange(selectFPCourse);
  clearRadiosOnChecked(underage);
  radioSets.forEach(function (set) { //TODO to function pls
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

  formOxfordDetails.addEventListener('submit', (event) => {
    event.preventDefault();
    let isFormValid = validateFormOxford(dni, email , phoneNumber);
  
    if (isFormValid) {
        const pricingTable = document.querySelector('.pricing-table');
        pricingTable.classList.remove('is-hidden');

        const areButtons = document.getElementById('are-buttons');
        areButtons.classList.add('is-hidden');

        if (selectFPCourse[0].value !== '') {   
            const fpStudentElement = document.getElementById('fpStudent');
            fpStudentElement.classList.remove('is-hidden');
          }
        
            
        }
     

  });

  // Get all the buttons with class 'has-paid'
const buttons = document.querySelectorAll('.has-paid');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the parent element
    const parentValue = button.parentElement.value;

    // Traverse up two levels in the DOM
    const grandParent = button.parentElement.previousElementSibling.previousElementSibling;
    const planPrice = grandParent.textContent.trim().replace(/\$/g, '');

    stripe(planPrice, productsData);

  });
});

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