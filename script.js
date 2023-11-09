// Using strict mode helps you to catch and identify certain errors
"use strict";

// Form
const lastForm = document.getElementById("lastForm");

// Buttons
const pL_button = document.getElementById("pledgeList_button");
const close_pL = document.getElementById("close_pledgeList");
const radioButtons = document.querySelectorAll("input[type=radio]");
const continueButtons = document.querySelectorAll("button[type=submit]");

// Display
const completion_message = document.querySelector(".completion_message");

// Inputs
const input1 = document.getElementById("pledge1");
const input2 = document.getElementById("pledge2");
const input3 = document.getElementById("pledge3");
//const input4 = document.getElementById("pledge4");

// Outputs
const output1 = document.getElementById("currentAmount");
const output2 = document.getElementById("totalBackers");

// Stock
const stock1 = document.getElementById("stock1");
const stock2 = document.getElementById("stock2");
//const stock3 = document.getElementById("stock3");

function display_pledgeList() {
  document.getElementById("pledgeList").style.display = "block";
}

// Call the function display_pledgeList() when pledgeList_button is clicked
pL_button.onclick = display_pledgeList;

function close_pledgeList() {
  document.getElementById("pledgeList").style.display = "none";
}

// Call the function close_pledgeList() when close_pledgeList button is clicked
close_pL.onclick = close_pledgeList;

// Radio Buttons
radioButtons.forEach((radio) => {
  radio.addEventListener("click", () => {
    const form = radio.parentElement.querySelector("form");

    radioButtons.forEach((otherRadioButtons) => {
      const form = otherRadioButtons.parentElement.querySelector("form");
      form.style.display = "none";
    });

    if (radio.checked) form.style.display = "block";
  });
});

// Validator
function validate() {
  const input4 = document.getElementById("pledge4");
  const error = document.querySelector("small");
  let validator = true;
  if (input4.value < 200) {
    input4.style.borderColor = "red";
    error.innerText = "Minimum pledge needs to be $200";
    validator = false;
  } else {
    input4.style.borderColor = "";
    error.innerText = "";
    validator = true;
  }
  return validator;
}

// Form Element
function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    //console.log("This is true");
    const stock3 = document.getElementById("stock3");
    const input4 = document.getElementById("pledge4");
    const cBtn = document.getElementById("continueButton");
    //console.log(cBtn);

    cBtn.addEventListener("click", () => {
      let stockAmount = 1;
      //console.log(stockAmount);

      stockAmount--;
      stock3.innerHTML = stockAmount;
      //console.log(stock3);
    });
  }
}

// ADDING THE SUBMIT EVENTLISTENER TO THE FORM
lastForm.addEventListener("submit", handleSubmit);

/*
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("label").style.color = "red";
      parent.querySelector("small").innerText = "This field is required";
      validator = false;
    } else if (monthInput.value > 12) {
      monthInput.style.borderColor = "red";
      parent.querySelector("label").style.color = "red";
      monthInput.parentElement.querySelector("small").innerText =
        "Must be a valid month";
      validator = false;
    } else if (dayInput.value > 31) {
      dayInput.style.borderColor = "red";
      parent.querySelector("label").style.color = "red";
      dayInput.parentElement.querySelector("small").innerText =
        "Must be a valid day";
      validator = false;
    } else {
      i.style.borderColor = "";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}


function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInput.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInput.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInput.value;
    const m = month - monthInput.value;
    const y = year - yearInput.value;

    dayOutput.innerHTML = d;
    monthOutput.innerHTML = m;
    yearOutput.innerHTML = y;
  }
}

// Continue Buttons
continueButtons.forEach((continueButton) => {
  continueButton.addEventListener("click", () => {
    console.log("Continue Button is clicked");
    completion_message.style.display = "block";
  });
});
*/

/*
// Radio Buttons
radioButtons.forEach((radio) => {
  //console.log(radioButtons);
  radio.addEventListener("click", () => {
    if (radio.checked) {
      console.log("radio is clicked");
      const form = radio.parentElement.querySelector("form");
      form.style.display = "block";
    } else {
      console.log("radio is unclicked");
      form.style.display = "none";
    }
  });
});
*/

/*
function handleRadioClick() {
  //console.log(handleRadioClick);
  if (document.getElementByTagName("input").checked) {
    form.style.display = "block";
  } else {
    property.radio.checked = false;
  }
}


('click', () => {
		document.querySelector('.mobile-btn__close-icon').classList.remove('opened')
		document.querySelector('.mobile-btn__open-icon').classList.remove('closed')
		document.querySelector('.mobile-btn__open-icon').classList.add('opened')
		mobileLinksContainer.classList.remove('opened')
		bodyHtml.classList.remove('overflow')
	})
})
*/

/*

const box = document.getElementById("box");
let radioBtns = document.getElementsByTagName("input");

function handleRadioClick() {
  if (document.getElementByTagName("show").checked) {
    box.style.display = "block";
  } else {
    property.radio.checked = false;
  }
}

const radioButtons = document.querySelectorAll('input[name="example"]');
radioButtons.forEach((radio) => {
  radio.addEventListener("click", handleRadioClick);
});
*/

/*
let radios = document.getElementsByTagName("input");
for (i = 0; i < radios.length; i++) {
  radios[i].onclick = function (e) {
    if (e.ctrlKey) {
      this.checked = false;
    }
  };
}
*/
