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

// BULMA JS form
function stripe() {
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
            mode: currentItemSelected > 100 ? "payment" : "subscription",
            successUrl: "https://google.com",
            cancelUrl: "https://google.com",
        }).then(function (result) {
            if (result.error) {
                alert(result.error.message)
            }
        })
}

function dangerOnValidationAppender(text, appender, input) {
    input.classList.add('is-danger');
    const helpText = document.createElement('p');
    helpText.classList.add('help', 'is-danger');
    helpText.textContent = text;
    appender.appendChild(helpText);
    helpText.style.position = 'absolute';
    helpText.style.top = appender.offsetHeight + 'px';
    helpText.style.left = 0;
}

function dangerOnValidationAppenderRadio(text, appender, input1, input2) {
    input1.classList.add('is-danger');
    input2.classList.add('is-danger');
    const helpText = document.createElement('p');
    helpText.classList.add('help', 'is-danger');
    helpText.textContent = text;
    appender.appendChild(helpText);
    helpText.style.position = 'absolute';
    helpText.style.top = appender.offsetHeight + 'px';
    helpText.style.left = 0; 
}

function dangerOnValidationRemover(input) {
    input.classList.remove('is-danger');
    const inputWrapper = input.parentNode;
    const helpText = inputWrapper.querySelector('.help');
    if (helpText) {
        helpText.parentNode.removeChild(helpText);
    }
}

function validateForm() {
const formInputs = document.forms["user_details"].elements;
let radioCounter = 0;
let radioCheckedCounter = 0;
let pastOneWasChecked = false;

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
            }
        }
        pastOneWasChecked = false;
    }
    

    } else if (formInputs[i].tagName === "SELECT") {
    if (formInputs[i].value === "") {
        dangerOnValidationAppender(
        "Please select a valid option",
        formInputs[i].parentNode,
        formInputs[i].parentNode
        );
    }
    } else if (formInputs[i].tagName === "INPUT") {
    if (!formInputs[i].value.trim()) {
        
    }
    }
}

if (totalFilesSelected === 0) {
    dangerOnValidationAppender('Please upload a file', fileInput.parentNode.parentNode, fileInput.parentNode.parentNode)
}

if (radioCheckedCounter === 1) {
    return true;
} else {
    return false;
}
}

function validateForm1() {
const formInputs = document.forms["user_course_details"].elements;
let radioCounter = 0;
let checkboxCheckedCounter = 0;
let radioCheckedCounter = 0;
let pastOneWasChecked = false;

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
            }
        }
        pastOneWasChecked = false;
    }
    } else if (formInputs[i].type === "checkbox") {
    if (formInputs[i].checked) {
        checkboxCheckedCounter++;
    } else {
        dangerOnValidationAppender('Please accept to continue', formInputs[i].parentElement, formInputs[i].parentNode)
    }
    } else if (formInputs[i].tagName === "SELECT") {
    if (formInputs[i].value === "") {
        dangerOnValidationAppender('Please select a valid option', formInputs[i].parentNode, formInputs[i].parentNode)
    }
    }
}

if (radioCheckedCounter === 2 && checkboxCheckedCounter === 2) {
    return true;
} else {
    return false;
}
}

function inputChecker(requiredInputs, checkerOrSubimit) {
    let isInputedDataValid = true;
    requiredInputs.forEach(input => {

        if (checkerOrSubimit) {
            const inputWrapper = input.parentNode;

            input.addEventListener('input', (event) => {
                const inputValue = event.target.value.trim();

                if (inputValue.length === 0) {
                    console.log('Input is empty!');
                    dangerOnValidationAppender('This field is required', inputWrapper, input);
                    isInputedDataValid = false;
                } else {
                    console.log('Input value: ' + inputValue);
                    dangerOnValidationRemover(input);
                }
            });
            
        } else {
            const inputValue = input.value.trim();

            if (inputValue.length === 0) {
                dangerOnValidationAppender('This field is required', input.parentNode, input);
                isInputedDataValid = false;
            } else {
                dangerOnValidationRemover(input);
            }
        }

    });
    return isInputedDataValid;
}

function clearSelectBoxOnChange(selectBox) {
    selectBox.forEach(option => {
        option.addEventListener('change', (event) => {
            if (event.target) {
                dangerOnValidationRemover(option.parentNode);
            }
        });
    });
}

function clearCheckboxOnChange(checkboxList) {
    for (let i = 0; i < checkboxList.length; i++) {
      checkboxList[i].addEventListener('change', (event) => {
        if (event.target.checked) {
          dangerOnValidationRemover(checkboxList[i].parentNode);
        }
      });
    }
  }

function clearRadiosOnChecked(stringOfRadioClicked, radioSet) {
radioSet.forEach(radio => {
    radio.addEventListener('change', (event) => {
        if (event.target) {
            if(event.target.nextElementSibling.innerHTML.includes(stringOfRadioClicked)) {
                dangerOnValidationRemover(radio.nextElementSibling);
                dangerOnValidationRemover(radio.nextElementSibling.nextElementSibling.nextElementSibling);
            }else{
                dangerOnValidationRemover(radio.nextElementSibling);
                dangerOnValidationRemover(radio.previousElementSibling);
            }
        }
    });
});
}

function updatePriceText() {
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
                currentItemSelected = text.textContent.split(" ")[paymentTypeGlobal];
                break;
            }
        }
    } else {
        newElement.parentNode.removeChild(newElement);
        newElement = null;
    }
}

function handleSelection() {
    if ((courseWeekdays.checked || courseWeekdays.nextElementSibling.nextElementSibling.checked) && (coursePaymentType.checked || coursePaymentType.nextElementSibling.nextElementSibling.checked) && courseHours.value !== "") {
        updatePriceText();


        const days = courseWeekdays.nextElementSibling.innerHTML;
        const hours = courseHours.value;

        const filteredCourses = Object.values(coursesData).filter(course => {
            return course.days.includes(days) && course.course.includes(hours);
        });

        const courseSelect = document.getElementById("course");

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
        updatePriceText();
    }

}

    
    let newElement = null;
    let wasPaymentTypeSelected = false;
    let currSelectedCourse;
    let paymentTypeGlobal = -1;
    let totalFilesSelected = 0;
    let currentItemSelected;

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
        }
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

    //Validacion (Esperar repartir entre compis x requeisitos Silvia)
    const requiredInputs = document.querySelectorAll('.validation_basic');
    inputChecker(requiredInputs, true);

    const dni = document.getElementById('dni_validation');
    //TODO: dni validation
    const phoneNumber = document.getElementById('phone_validation');
    //TODO: phone validation
    const email = document.getElementById('email_validation');
    //TODO: email validation
    const birth = document.getElementById('birth_validation');
    //TODO: birth validation
    const enrollment = document.getElementById('enrollment_validation');
    //TODO: enrollment validation

    const fileInput = document.querySelector('#file-js-example input[type=file]');
    fileInput.onchange = () => {
        if (fileInput.files.length > 0) {
            totalFilesSelected++;
            dangerOnValidationRemover(fileInput.parentNode);
            dangerOnValidationRemover(fileInput.parentNode.parentNode);
            const fileName = document.querySelector('#file-js-example .file-name');
            fileName.textContent = fileInput.files[0].name;
        }
    }

    const selectFPCourse = document.getElementsByName('coursesFP');
    clearSelectBoxOnChange(selectFPCourse);

    const oldStudent = document.getElementsByName('old_student');
    clearRadiosOnChecked('Yes', oldStudent);

    const formUserDetails = document.querySelector('form[name="user_details"]');
    formUserDetails.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let isInputedDataValid = inputChecker(requiredInputs, false);
        let isFormValid = validateForm();

          if (isInputedDataValid && isFormValid) 
          {
            formUserDetails.style.display = 'none';
            formUserCourseDetails.style.display = 'block';
          }

            
        
        //formUserDetails.submit();


    });

    
    const formUserCourseDetails = document.querySelector('form[name="user_course_details"]');
    formUserCourseDetails.addEventListener('submit', (event) => {
        event.preventDefault();

        //let isInputedDataValid = inputChecker(requiredInputs, false);
        let isFormValid = validateForm1();

          if (isFormValid) 
          {
            alert("Formulario enviado");
            stripe();
          }

        //formUserCourseDetails.submit();
    });

    const courseWeekdaysRadio = document.getElementsByName('course_weekdays');
    clearRadiosOnChecked('Lunes y miércoles', courseWeekdaysRadio);

    const typeOfPaymentRadio = document.getElementsByName('payment_type');
    clearRadiosOnChecked('Monthly', typeOfPaymentRadio);

    const courseHoursSelectBox = document.getElementsByName('courseHours');
    clearSelectBoxOnChange(courseHoursSelectBox);

    const englishCourseSelectBox = document.getElementsByName('englishCourse');
    clearSelectBoxOnChange(englishCourseSelectBox);

    const returnBtn = document.getElementById('returnBtn');
    returnBtn.addEventListener('click', (event) => {
        event.preventDefault();
        formUserCourseDetails.style.display = 'none';
        formUserDetails.style.display = 'block';
    });

    const policiesCheckbox = document.getElementsByClassName('checkbox');
    clearCheckboxOnChange(policiesCheckbox);

    const courseSelect = document.getElementById("course");

    const paymentTypeInputs = document.querySelectorAll('.field input[name="payment_type"]');
    paymentTypeInputs.forEach((input) => {
        input.addEventListener('click', () => {
            if (document.getElementById('radioCustom6').checked) {
                paymentTypeGlobal = 1;
            } else {
                paymentTypeGlobal = 0;
            }
            updatePriceText();
        });
    });

    const courseSelected = document.querySelector('select[name="englishCourse"]');
    courseSelected.addEventListener('change', () => {
        updatePriceText();
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
        updatePriceText();
    });

    const courseWeekdays = document.querySelector('input[name="course_weekdays"]');
    const courseHours = document.querySelector('select[name="courseHours"]');
    const coursePaymentType = document.querySelector('input[name="payment_type"]');

    courseWeekdays.addEventListener('change', handleSelection);
    courseHours.addEventListener('change', handleSelection);
    coursePaymentType.addEventListener('change', handleSelection);