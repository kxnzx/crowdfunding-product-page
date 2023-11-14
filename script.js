// Using strict mode helps you to catch and identify certain errors
"use strict";

// Form
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const form4 = document.getElementById("form4");

// Buttons
const pL_button = document.getElementById("pledgeList_button");
const close_pL = document.getElementById("close_pledgeList");
const bookmark_btn = document.getElementById("bookmark_btn");
const radioButtons = document.querySelectorAll("input[type=radio]");
const continueButtons = document.querySelectorAll("button[type=submit]");

// Display
const completion_message = document.querySelector(".completion_message");

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

// Bookmark Button toggle
bookmark_btn.addEventListener("click", () => {
  console.log("Bookmarkbutton has been clicked");
  document.getElementById("bookmark_img_off").style.display = "none";
  document.getElementById("bookmark_img_on").style.display = "block";

});

// Display text in button when screen resizes 
const resize = window.matchMedia("(min-width: 700px)");

function addBtnText(resize) {
  if (resize.matches) { // If media query matches
    document.getElementById("buttontext").innerText += "Bookmark";
  } else{
    document.getElementById("buttontext").innerText += "";
  }
}


//myFunction(resize); // Call listener function at run time
resize.addListener(addBtnText); // Attach listener function on state changes


/*
 // If it's true that the menu class contains the displayMenu class, do this:
  if (menu.classList.contains("displayMenu")) {
    // Execute this block of code if the specified condition is true:
    menu.classList.remove("displayMenu");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
    menu.style.display = "none";
  }
  // If it's false that the menu class contains the showMenu class, do this:
  else {
    // Execute this block of code if the specified condition is false:
    menu.classList.add("displayMenu");
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
    menu.style.display = "block";
  }


function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(min-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

*/

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

// Validator 1
function validate1() {
  const input1 = document.getElementById("pledge1");
  const error1 = document.getElementById("small1");
  let validator = true;
  if (input1.value < 1) {
    input1.style.borderColor = "red";
    error1.innerText = "Minimum pledge needs to be $1";
    validator = false;
  } else {
    input1.style.borderColor = "";
    error1.innerText = "";
    validator = true;
  }
  return validator;
}

// Validator 2
function validate2() {
  const input2 = document.getElementById("pledge2");
  const error2 = document.getElementById("small2");
  let validator = true;
  if (input2.value < 25) {
    input2.style.borderColor = "red";
    error2.innerText = "Minimum pledge needs to be $25";
    validator = false;
  } else {
    input2.style.borderColor = "";
    error2.innerText = "";
    validator = true;
  }
  return validator;
}

// Validator 3
function validate3() {
  const input3 = document.getElementById("pledge3");
  const error3 = document.getElementById("small3");
  let validator = true;
  if (input3.value < 75) {
    input3.style.borderColor = "red";
    error3.innerText = "Minimum pledge needs to be $75";
    validator = false;
  } else {
    input3.style.borderColor = "";
    error3.innerText = "";
    validator = true;
  }
  return validator;
}

// Validator 4
function validate4() {
  const input4 = document.getElementById("pledge4");
  const error4 = document.getElementById("small4");
  let validator = true;
  if (input4.value < 200) {
    input4.style.borderColor = "red";
    error4.innerText = "Minimum pledge needs to be $200";
    validator = false;
  } else {
    input4.style.borderColor = "";
    error4.innerText = "";
    validator = true;
  }
  return validator;
}

// Form Element 1
function handleSubmit1(e) {
  e.preventDefault();
  if (validate1()) {
    //console.log("This is true");

    const input1 = document.getElementById("pledge1");
    //console.log(input2);
    const cBtn1 = document.getElementById("continueButton1");
    //console.log(cBtn1);

    // OUTPUT 1
    const output1 = document.getElementById("currentAmount");
    const output2 = document.getElementById("currentBackers");

    let currentAmount = 89914;
    console.log(currentAmount);

    const totalAmount1 = parseInt(currentAmount) + parseInt(input1.value);
    console.log(input1.value);
    console.log(totalAmount1);
    output1.innerHTML = "$" + new Intl.NumberFormat().format(totalAmount1);

    let currentBackers = 5007;
    console.log(currentBackers);

    currentBackers++;
    output2.innerHTML = new Intl.NumberFormat().format(currentBackers);
    console.log(currentBackers);

    completion_message.classList.add("display_completion_message");
  }
}

// Form Element 2
function handleSubmit2(e) {
  e.preventDefault();
  if (validate2()) {
    //console.log("This is true");
    const stock1 = document.getElementById("stock1");
    //console.log(stock1);
    const input2 = document.getElementById("pledge2");
    //console.log(input2);
    const cBtn2 = document.getElementById("continueButton2");
    //console.log(cBtn2);

    let stockAmount = 101;
    //console.log(stockAmount);

    stockAmount--;
    stock1.innerHTML = stockAmount;

    // OUTPUT 3
    const output1 = document.getElementById("currentAmount");
    const output2 = document.getElementById("currentBackers");

    let currentAmount = 89914;
    console.log(currentAmount);

    const totalAmount2 = parseInt(currentAmount) + parseInt(input2.value);
    console.log(input2.value);
    console.log(totalAmount2);
    output1.innerHTML = "$" + new Intl.NumberFormat().format(totalAmount2);

    let currentBackers = 5007;
    console.log(currentBackers);

    currentBackers++;
    output2.innerHTML = new Intl.NumberFormat().format(currentBackers);
    console.log(currentBackers);

    completion_message.classList.add("display_completion_message");
  }
}

// Form Element 3
function handleSubmit3(e) {
  e.preventDefault();
  if (validate3()) {
    //console.log("This is true");
    const stock2 = document.getElementById("stock2");
    //console.log(stock2);
    const input3 = document.getElementById("pledge3");
    //console.log(input3);
    const cBtn3 = document.getElementById("continueButton3");
    //console.log(cBtn3);

    let stockAmount = 64;
    //console.log(stockAmount);

    stockAmount--;
    stock2.innerHTML = stockAmount;

    // OUTPUT 3
    const output1 = document.getElementById("currentAmount");
    const output2 = document.getElementById("currentBackers");

    let currentAmount = 89914;
    console.log(currentAmount);

    const totalAmount3 = parseInt(currentAmount) + parseInt(input3.value);
    console.log(input3.value);
    console.log(totalAmount3);
    output1.innerHTML = "$" + new Intl.NumberFormat().format(totalAmount3);

    let currentBackers = 5007;
    console.log(currentBackers);

    currentBackers++;
    output2.innerHTML = new Intl.NumberFormat().format(currentBackers);
    console.log(currentBackers);

    completion_message.classList.add("display_completion_message");
  }
}

// Form Element 4
function handleSubmit4(e) {
  e.preventDefault();
  if (validate4()) {
    //console.log("This is true");
    const stock3 = document.getElementById("stock3");
    //console.log(stock3);
    const input4 = document.getElementById("pledge4");
    //console.log(input4);
    const cBtn4 = document.getElementById("continueButton4");
    //console.log(cBtn);

    let stockAmount = 1;
    //console.log(stockAmount);

    stockAmount--;
    stock3.innerHTML = stockAmount;

    // OUTPUT 4
    const output1 = document.getElementById("currentAmount");
    const output2 = document.getElementById("currentBackers");

    let currentAmount = 89914;
    console.log(currentAmount);

    const totalAmount4 = parseInt(currentAmount) + parseInt(input4.value);
    console.log(input4.value);
    console.log(totalAmount4);
    output1.innerHTML = "$" + new Intl.NumberFormat().format(totalAmount4);

    let currentBackers = 5007;
    console.log(currentBackers);

    currentBackers++;
    output2.innerHTML = new Intl.NumberFormat().format(currentBackers);
    console.log(currentBackers);

    completion_message.classList.add("display_completion_message");
  }
}

// ADDING THE SUBMIT EVENTLISTENER TO THE FORMS
form1.addEventListener("submit", handleSubmit1);
form2.addEventListener("submit", handleSubmit2);
form3.addEventListener("submit", handleSubmit3);
form4.addEventListener("submit", handleSubmit4);

/*
Selecting all forms: (this does not work)

forms.addEventListener("submit", handleSubmit);
console.log(forms);
Uncaught TypeError: forms.addEventListener is not a function
*/

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
