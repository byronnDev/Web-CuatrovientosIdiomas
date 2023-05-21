//Handle stripe payment
export function stripe(currentItemSelected, productsData) {
    var stripe = Stripe(
        "pk_test_Kk44etb9arfGs64zFUGivUPZ"
    )
    console.log(currentItemSelected);
    let productId = "";
    for (const key in productsData) {
        if (productsData[key].price.indexOf(currentItemSelected) !== -1) {
            productId = productsData[key].productId;
            break;
        }
    }
    console.log(productId);

    stripe.redirectToCheckout({
        lineItems: [
            {
                price: productId,
                quantity: 1,
            },
        ],
        mode: getProductMode(productId),
        successUrl: "https://google.com",
        cancelUrl: "https://google.com",
    }).then(function (result) {
        if (result.error) {
            alert(result.error.message)
        }
    })
}
//Through a product id, we can know if it is a subscription or a payment
function getProductMode(productId) {
    switch (productId) {
      case "price_1N2zMdASksDI5wteY4NTvonC":
        return "subscription";
      case "price_1N2zM3ASksDI5wtehOpnso4v":
        return "subscription";
      case "price_1N2zLEASksDI5wteR34yl20j":
        return "payment";
      case "price_1N2zMPASksDI5wteK8UZaOO4":
        return "payment";
      case "price_1N9sQiASksDI5wteP4k37jxM":
        return "payment";
      case "price_1N9sR3ASksDI5wtevrRHcwJ5":
        return "payment";
      case "price_1N9sRMASksDI5wteILtT3Zmm":
        return "payment";
      case "price_1N9sRlASksDI5wtex6xWU1zC":
        return "payment";
      default:
        return "error";
    }
}
//This appends a text to an APPENDER and adds a class to the INPUT to make it red 
export function dangerOnValidationAppender(text, appender, input) {
    input.classList.add('is-danger');
  
    const existingHelpText = appender.querySelector('.help.is-danger');
    if (existingHelpText) {
      existingHelpText.textContent = text;
      return;
    }
  
    const helpText = document.createElement('p');
    helpText.classList.add('help', 'is-danger');
    helpText.textContent = text;
    appender.appendChild(helpText);
    helpText.style.position = 'absolute';
    helpText.style.top = appender.offsetHeight + 'px';
    helpText.style.left = 0;
}

//This appends a text to an APPENDER and adds a class to the INPUT1 INPUT2 to make it red
export function dangerOnValidationAppenderRadio(text, appender, input1, input2) {
input1.classList.add('is-danger');
input2.classList.add('is-danger');

let helpText = appender.querySelector('.help');

if (!helpText) {
    helpText = document.createElement('p');
    helpText.classList.add('help', 'is-danger');
    helpText.textContent = text;
    appender.appendChild(helpText);
    helpText.style.position = 'absolute';
    helpText.style.top = appender.offsetHeight + 'px';
    helpText.style.left = 0;
}
}

//This removes the red class from the INPUT and removes the text from the APPENDER
export function dangerOnValidationRemover(input) {
    input.classList.remove('is-danger');
    const inputWrapper = input.parentNode;
    const helpText = inputWrapper.querySelector('.help');
    if (helpText) {
        helpText.parentNode.removeChild(helpText);
    }
}

//Checks if the MAIN FORM of getting into a COURSE is valid
export function validateForm(totalFilesSelected, fileInput, dni, email, phoneNumber, date1, date2) {
    const formInputs = document.forms["user_details"].elements;
    let radioCounter = 0;
    let radioCheckedCounter = 0;
    let pastOneWasChecked = false;
    let canWeSendTheForm = true;

    for (let i = 0; i < formInputs.length; i++) {
        const inputName = formInputs[i].name;

        if (inputName === "old_student") {
            radioCounter++;

            if (formInputs[i].checked) {
                radioCheckedCounter++;
                pastOneWasChecked = true;
            }

            if (radioCounter % 2 === 0) {
                if (!pastOneWasChecked && formInputs[i] && formInputs[i].previousElementSibling && formInputs[i].nextElementSibling) {
                    const previousElementSibling = formInputs[i].previousElementSibling;
                    const nextElementSibling = formInputs[i].nextElementSibling;
                    if (previousElementSibling && nextElementSibling) {
                        dangerOnValidationAppenderRadio('Please select an option', previousElementSibling, nextElementSibling, previousElementSibling);
                        canWeSendTheForm = false;
                    }
                }
                pastOneWasChecked = false;
            }


        } /* else if (formInputs[i].tagName === "SELECT") {
            if (formInputs[i].value === "") {
                dangerOnValidationAppender(
                    "Please select a valid option",
                    formInputs[i].parentNode,
                    formInputs[i].parentNode
                );
                canWeSendTheForm = false;
            }
        }  */
        else if (formInputs[i].tagName === "INPUT") {
            if (formInputs[i].classList.contains("validation_basic")) {
                if (formInputs[i].value.trim() === "") {
                    dangerOnValidationAppender('This field is required', formInputs[i].parentNode, formInputs[i]);
                    canWeSendTheForm = false; 
                }else{
                    dangerOnValidationRemover(formInputs[i]);
                }

                
              }
        }
    }

    if (totalFilesSelected === 0) {
        dangerOnValidationAppender('Please upload a file of your DNI', fileInput.parentNode.parentNode, fileInput.parentNode.parentNode)
        canWeSendTheForm = false;
    }

    if (!DNIValidaion(dni.value)) {
        dangerOnValidationAppender('Please enter a valid DNI Example: "08236554R"', dni.parentNode, dni)
        canWeSendTheForm = false;
    }else
    {
        dangerOnValidationRemover(dni);
    }

    if (!emailValidation(email.value)) {
        dangerOnValidationAppender('Please enter a valid email Example: "example@gmail.com"', email.parentNode, email)
        canWeSendTheForm = false;
    }else
    {
        dangerOnValidationRemover(email);
    }

    if (!phoneValidation(phoneNumber.value)) {
        dangerOnValidationAppender('Please enter a valid phone number Example: "671520833"', phoneNumber.parentNode, phoneNumber)
        canWeSendTheForm = false;
    }else
    {
        dangerOnValidationRemover(phoneNumber);
    }

    if (date1.value === "" || dateValidation(new Date(date1.value), false)) {
        dangerOnValidationAppender('Please select a date before the current date', date1.parentNode, date1)
        canWeSendTheForm = false;
    }else
    {
        dangerOnValidationRemover(date1);
    }

    if (date2.value === "" || dateValidation(new Date(date2.value), true)) {
        dangerOnValidationAppender('Please select a date after the current date', date2.parentNode, date2)
        canWeSendTheForm = false;
    }else
    {
        dangerOnValidationRemover(date2);
    }


    if (radioCheckedCounter !== 1) {
        canWeSendTheForm = false;
    }

    if (canWeSendTheForm) {
        return true;
    } else {
        return false;
    }
}
//VALIDACION MIKEL
export function DNIValidaion(dni) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const letra = dni.charAt(dni.length - 1).toUpperCase();
    const numeros = dni.slice(0, -1);

    if (letras.charAt(numeros % 23) === letra) {
        return true;
    } else {
        return false;
    }
}
//VALIDACION INAZIO
export function emailValidation(email) {
    let regExp = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regExp)) {
        return true;
    } else {
        return false;
    }
}
export function phoneValidation(phoneNumber) {
        const phoneNumberRegex = /^(6|7|9)\d{8}$/;
        if (phoneNumber.match(phoneNumberRegex)) {
            return true;
        }
        return false;
}
function dateValidation(date, isOlder) {
  const today = new Date();

  if (isOlder) {
    return date < today;
  } else {
    return date > today;
  }
}
//Checks if the SECOND FORM of getting into a COURSE is valid
export function validateForm1() {
    const formInputs = document.forms["user_course_details"].elements;
    let radioCounter = 0;
    let checkboxCheckedCounter = 0;
    let radioCheckedCounter = 0;
    let pastOneWasChecked = false;
    let canWeSendTheForm = true;

    for (let i = 0; i < formInputs.length; i++) {
        const inputName = formInputs[i].name;

        if (inputName === "course_weekdays" || inputName === "payment_type") {
            radioCounter++;

            if (formInputs[i].checked) {
                radioCheckedCounter++;
                pastOneWasChecked = true;
            }

            if (radioCounter % 2 === 0) {
                if (!pastOneWasChecked && formInputs[i] && formInputs[i].previousElementSibling && formInputs[i].nextElementSibling) {
                    const previousElementSibling = formInputs[i].previousElementSibling;
                    const nextElementSibling = formInputs[i].nextElementSibling;
                    if (previousElementSibling && nextElementSibling) {
                        dangerOnValidationAppenderRadio('Please select an option', previousElementSibling, nextElementSibling, previousElementSibling);
                        canWeSendTheForm = false;
                    }
                }
                pastOneWasChecked = false;
            }
        } else if (formInputs[i].type === "checkbox") {
            if (formInputs[i].checked) {
                checkboxCheckedCounter++;
            } else {
                dangerOnValidationAppender('Please accept to continue', formInputs[i].parentElement, formInputs[i].parentNode)
                canWeSendTheForm = false;
            }
        } else if (formInputs[i].tagName === "SELECT") {
            if (formInputs[i].value === "") {
                dangerOnValidationAppender('Please select a valid option', formInputs[i].parentNode, formInputs[i].parentNode)
                canWeSendTheForm = false;
            }
        }
    }

    if (radioCheckedCounter !== 2 && checkboxCheckedCounter !== 2) {
        canWeSendTheForm = false;
    }

    if (canWeSendTheForm) {
        return true;
    } else {
        return false;
    }
}
//Checks if the passed SELECTBOX changed its state to clear errors alerts
export function clearSelectBoxOnChange(selectBox) {
    selectBox.forEach(option => {
        option.addEventListener('change', (event) => {
            if (event.target) {
                dangerOnValidationRemover(option.parentNode);
            }
        });
    });
}

//Checks if the passed CHECKBOX changed its state to clear errors alerts
export function clearCheckboxOnChange(checkboxList) {
    for (let i = 0; i < checkboxList.length; i++) {
        checkboxList[i].addEventListener('change', (event) => {
            if (event.target.checked) {
                dangerOnValidationRemover(checkboxList[i].parentNode);
            }
        });
    }
}

//Checks if the passed RADIO changed its state to clear errors alerts
export function clearRadiosOnChecked(radioSet) {
    radioSet.forEach(radio => {
      radio.addEventListener('change', (event) => {
        if (event.target) {
          const selectedValue = event.target.getAttribute('data-value');
          if (selectedValue === '0') {
            dangerOnValidationRemover(radio.nextElementSibling);
            dangerOnValidationRemover(radio.nextElementSibling.nextElementSibling.nextElementSibling);
          } else if (selectedValue === '1') {
            dangerOnValidationRemover(radio.nextElementSibling);
            dangerOnValidationRemover(radio.previousElementSibling);
          }
        }
      });
    });
}

//Updates the price text of the course
export function updatePriceText(newElement, courseSelect, courseHours, coursesData, paymentTypeGlobal) {
    if (!newElement) {
        return;
    }

    const selectedCourse = courseSelect.value;
    if (selectedCourse.includes(courseHours.value) && courseHours.value !== "") {
        for (const courseId in coursesData) {
            const course = coursesData[courseId];
            if (course.course === selectedCourse) {
                const text = document.createTextNode(course.price.split("ó")[paymentTypeGlobal]);
                newElement.removeChild(newElement.firstChild);
                newElement.appendChild(text);
                return text.textContent.split(" ")[paymentTypeGlobal];
            }
        }
    } else {
        newElement.parentNode.removeChild(newElement);
        newElement = null;
    }
}
//Updates the selectbox of available courses
export function handleSelection(courseWeekdays, courseHours, coursePaymentType, courseSelect, coursesData, hasUserDoneFp, courseWeekdaysRadio) {
    if ((courseWeekdays.checked || courseWeekdays.nextElementSibling.nextElementSibling.checked) && (coursePaymentType.checked || coursePaymentType.nextElementSibling.nextElementSibling.checked) && courseHours.value !== "") {

        let days;
        courseWeekdaysRadio.forEach(radio => {
            if (radio.checked) {
              const dataValue = radio.getAttribute('data-value');
              if (dataValue === '0') {
                days = 'Lunes y miércoles';
              } else if (dataValue === '1') {
                days = 'Martes y jueves';
              }
            }
          });
          

        const levelCourse = courseHours.value;

        let filteredCourses = Object.values(coursesData).filter(course => {
            if (course.course.includes("FP") && !hasUserDoneFp) {
                return;
            }else{
                return course.days.includes(days) && course.course.includes(levelCourse);
            }
            });
        



        courseSelect.disabled = false;

        courseSelect.innerHTML = "";
        const option = document.createElement("option");
        option.value = "";
        option.text = "Select a Course";
        courseSelect.appendChild(option);

        filteredCourses.forEach(course => {
            const option = document.createElement("option");
            option.value = course.course;
            option.text = course.course;
            courseSelect.appendChild(option);
        });

        coursePaymentType.removeEventListener('change', handleSelection);
        courseWeekdays.removeEventListener('change', handleSelection);

    } else {
        courseSelect.disabled = true;
    }

}
//Checks if OXFORD FORM is valid
export function validateFormOxford(dni, email, phone) {
    const formInputs = document.forms["oxfordDetails"].elements;
    let radioCounter = 0;
    let radioCheckedCounter = 0;
    let pastOneWasChecked = false;
    let canWeSendTheForm = true;

    for (let i = 0; i < formInputs.length; i++) {
        const inputName = formInputs[i].name;

        if (inputName === "underage") {
            radioCounter++;

            if (formInputs[i].checked) {
                radioCheckedCounter++;
                pastOneWasChecked = true;
            }

            if (radioCounter % 2 === 0) {
                if (!pastOneWasChecked && formInputs[i] && formInputs[i].previousElementSibling && formInputs[i].nextElementSibling) {
                    const previousElementSibling = formInputs[i].previousElementSibling;
                    const nextElementSibling = formInputs[i].nextElementSibling;
                    if (previousElementSibling && nextElementSibling) {
                        dangerOnValidationAppenderRadio('Please select an option', previousElementSibling, nextElementSibling, previousElementSibling);
                        canWeSendTheForm = false;
                    }
                }
                pastOneWasChecked = false;
            }
        }else if (formInputs[i].tagName === "INPUT") {
            if (formInputs[i].classList.contains("validation_basic")) {
                if (formInputs[i].value.trim() === "") {
                    dangerOnValidationAppender('This field is required', formInputs[i].parentNode, formInputs[i]);
                    canWeSendTheForm = false; 
                }else{
                    dangerOnValidationRemover(formInputs[i]);
                }

                
              }
        }    
    }

    if (!DNIValidaion(dni.value)) {
        dangerOnValidationAppender('Please enter a valid DNI Example: "08236554R"', dni.parentNode, dni)
        canWeSendTheForm = false;
    }else
    {
        dangerOnValidationRemover(dni);
    }

    if (!emailValidation(email.value)) {
        dangerOnValidationAppender('Please enter a valid email Example: "example@gmail.com"', email.parentNode, email)
        canWeSendTheForm = false;
    }
    else{
        dangerOnValidationRemover(email);
    }

    if (!phoneValidation(phone.value)) {
        dangerOnValidationAppender('Please enter a valid phone number Example: "671520833"', phone.parentNode, phone)
        canWeSendTheForm = false;
    }
    else{
        dangerOnValidationRemover(phone);
    }

    if (radioCheckedCounter !== 1) {
        canWeSendTheForm = false;
    }

    if (canWeSendTheForm) {
        return true;
    } else {
        return false;
    }
}