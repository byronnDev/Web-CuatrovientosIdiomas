import {
    stripe,
    clearSelectBoxOnChange,
    clearRadiosOnChecked,
    validateFormOxford
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

  const formOxfordDetails = document.querySelector('form[name="oxfordDetails"]');
  const dni = document.getElementById('dni_validation');
  const email = document.getElementById('email_validation');
  const phoneNumber = document.getElementById('phone_validation');
  const selectFPCourse = document.getElementsByName('coursesFP');
  const underage = document.getElementsByName('underage');
  const radioSets = document.querySelectorAll('[data-radio-set]');
    

  clearSelectBoxOnChange(selectFPCourse);
  clearRadiosOnChecked(underage);

  //Listen for a change in ALL the radio buttons, if state has changed, remove the danger class of OLD element and add it to the NEW one
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

  //Listen for form push
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

  //Listen for a click on a PRICETABLE
const buttons = document.querySelectorAll('.has-paid');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const parentValue = button.parentElement.value;

    const grandParent = button.parentElement.previousElementSibling.previousElementSibling;
    const planPrice = grandParent.textContent.split(' ')[0];

    stripe(planPrice, productsData);

  });
});

