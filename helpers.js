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
            mode: currentItemSelected > 100 ? "payment" : "subscription",
            successUrl: "https://google.com",
            cancelUrl: "https://google.com",
        }).then(function (result) {
            if (result.error) {
                alert(result.error.message)
            }
        })
}

export function dangerOnValidationAppender(text, appender, input) {
    input.classList.add('is-danger');
    const helpText = document.createElement('p');
    helpText.classList.add('help', 'is-danger');
    helpText.textContent = text;
    appender.appendChild(helpText);
    helpText.style.position = 'absolute';
    helpText.style.top = appender.offsetHeight + 'px';
    helpText.style.left = 0;
}

export function dangerOnValidationAppenderRadio(text, appender, input1, input2) {
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

export function dangerOnValidationRemover(input) {
    input.classList.remove('is-danger');
    const inputWrapper = input.parentNode;
    const helpText = inputWrapper.querySelector('.help');
    if (helpText) {
        helpText.parentNode.removeChild(helpText);
    }
}

//TODO: ir cambiado un var para lugo validar, si es falsa se retorna false y no se envia el formulario
export function validateForm(totalFilesSelected, fileInput, dni) {
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

if (!DNIValidaion(dni.value)) {
    dangerOnValidationAppender('Please enter a valid DNI', dni.parentNode, dni)
    alert('Please enter a valid DNI')
}

if (radioCheckedCounter === 1) {
    return true;
} else {
    return false;
}
}

//VALIDACION MIKEL
export function DNIValidaion(dni) 
{
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const letra = dni.charAt(dni.length - 1).toUpperCase();
    const numeros = dni.slice(0, -1);
  
    if (letras.charAt(numeros % 23) === letra) {
      return true;
    } else {
      return false;
    }
}
export function emailValidation() {}
export function phoneValidation() {}
export function dateValidation() {}

export function validateForm1() {
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

export function inputChecker(requiredInputs, checkerOrSubimit) {
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

export function clearSelectBoxOnChange(selectBox) {
    selectBox.forEach(option => {
        option.addEventListener('change', (event) => {
            if (event.target) {
                dangerOnValidationRemover(option.parentNode);
            }
        });
    });
}

export function clearCheckboxOnChange(checkboxList) {
    for (let i = 0; i < checkboxList.length; i++) {
      checkboxList[i].addEventListener('change', (event) => {
        if (event.target.checked) {
          dangerOnValidationRemover(checkboxList[i].parentNode);
        }
      });
    }
  }

export function clearRadiosOnChecked(stringOfRadioClicked, radioSet) {
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

export function updatePriceText(newElement, courseSelect, courseHours, coursesData, paymentTypeGlobal, currentItemSelected) {
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

export function handleSelection(courseWeekdays, courseHours, coursePaymentType, courseSelect, coursesData) {
    if ((courseWeekdays.checked || courseWeekdays.nextElementSibling.nextElementSibling.checked) && (coursePaymentType.checked || coursePaymentType.nextElementSibling.nextElementSibling.checked) && courseHours.value !== "") {
        //updatePriceText(newElement);


        const days = courseWeekdays.nextElementSibling.innerHTML;
        const hours = courseHours.value;

        const filteredCourses = Object.values(coursesData).filter(course => {
            return course.days.includes(days) && course.course.includes(hours);
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
        //updatePriceText(newElement);
    }

}