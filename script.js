// Using strict mode helps you to catch and identify certain errors
"use strict";

// Forms
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const form4 = document.getElementById("form4");

// Buttons
const pL_button = document.getElementById("pledgeList_button");
const close_pL = document.getElementById("close_pledgeList");
const bookmark_btn = document.getElementById("bookmark_btn");
const radioButtons = document.querySelectorAll("input[type=radio]");
//console.log(radioButtons);

// Overlay
const overlay = document.getElementById("overlay");

// Menu Button
const menuBtn = document.getElementById("menuBtn");

// Toggle Menu Button:
menuBtn.addEventListener("click", () => {

const menu = document.getElementById("menuList");
const open_menu = document.getElementById("open_menu");
const close_menu = document.getElementById("close_menu");
const overlay = document.getElementById("overlay");

  if (menu.classList.contains("displayMenu")) {
    // Execute this block of code if the specified condition is true:
    menu.classList.remove("displayMenu");
    close_menu.style.display = "none";
    open_menu.style.display = "block";
    menu.style.display = "none";
    overlay.style.display = "none";
  }
  else {
    // Execute this block of code if the specified condition is false:
    menu.classList.add("displayMenu");
    close_menu.style.display = "block";
    open_menu.style.display = "none";
    menu.style.display = "block";
    overlay.style.display = "block";
  }
})

// Completion Message
const completion_message = document.querySelector(".completion_message");

// Display list with Radio Buttons:
function display_pledgeList() {
  document.getElementById("pledgeList").style.display = "block";
  overlay.style.display = "block";
}

// Call the function display_pledgeList() when pledgeList_button is clicked:
pL_button.onclick = display_pledgeList;

// Close list with Radio Buttons:
function close_pledgeList() {
  document.getElementById("pledgeList").style.display = "none";
  overlay.style.display = "none";
}

// Call the function close_pledgeList() when close_pledgeList button is clicked:
close_pL.onclick = close_pledgeList;

// Display text in button when screen resizes: 
const resize = window.matchMedia("(min-width: 700px)");

resize.onchange = (e) => {
  if (resize.matches) { // If media query matches
    document.getElementById("buttontext").innerText += "Bookmark";
  }
}

// Remove text in button when screen resizes:
const resizeMobile = window.matchMedia("(max-width: 700px)");
//console.log(resizeMobile);

resizeMobile.onchange = (e) => {
  if (resizeMobile.matches) { // If media query matches
    location.href = location.href;
  } 
}

// Toggle Bookmark Button:
bookmark_btn.addEventListener("click", () => {

  const bookmarkOff = document.getElementById("bookmark_img_off");
  const bookmarkOn = document.getElementById("bookmark_img_on");
  let btnTxt = document.getElementById("buttontext").innerHTML;
 
    if(bookmarkOff.style.display !== 'none')
    {
    bookmarkOff.style.display = 'none';
    bookmarkOn.style.display = 'block';
    document.getElementById("buttontext").innerHTML = btnTxt.replace("Bookmark", "Bookmarked");
    document.getElementById("buttontext").style.color = ("	#147b74");
    console.log(btnTxt);
    } else
    {  
    bookmarkOff.style.display = 'block';
    bookmarkOn.style.display = 'none';
    document.getElementById("buttontext").innerHTML = btnTxt.replace("Bookmarked", "Bookmark");
    document.getElementById("buttontext").style.color = ("	#7a7a7a");
    }
});


// Radio Buttons
/*
By clicking the radio button, first it goes through all the buttons and deactivates each form, 
then it only activates the form of the button you clicked:
*/
radioButtons.forEach((radio) => {
  radio.addEventListener("click", () => {
    const form = radio.parentElement.parentElement.querySelector("form");
    //console.log(form.parentElement.parentElement); 

    radioButtons.forEach((otherRadioButtons) => {
      const form = otherRadioButtons.parentElement.parentElement.querySelector("form");
      //console.log(otherRadioButtons.parentElement.parentElement);
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
    document.getElementById("pledgeList").style.display = "none";
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
    document.getElementById("pledgeList").style.display = "none";
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
    document.getElementById("pledgeList").style.display = "none";
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
    document.getElementById("pledgeList").style.display = "none";
  }
}

// ADDING THE SUBMIT EVENTLISTENER TO THE FORMS:
form1.addEventListener("submit", handleSubmit1);
form2.addEventListener("submit", handleSubmit2);
form3.addEventListener("submit", handleSubmit3);
form4.addEventListener("submit", handleSubmit4);


/* I tried to refactor my code with the following, but it does not work: 
// Validator
function validateInput(input, error, errorMssg) {
  let validator = true;
  if (input.value < 1) {
    input.style.borderColor = "red";
    error.innerText = errorMssg;
    validator = false;
  } else {
    input.style.borderColor = "";
    error.innerText = "";
    validator = true;
  }
  return validator;
}

// 1
const input1 = document.getElementById("pledge1");
const error1 = document.getElementById("small1");

validateInput(input1, error1, "Minimum pledge needs to be $1");

// 2 
const input2 = document.getElementById("pledge2");
const error2 = document.getElementById("small2");

validateInput(input2, error2, "Minimum pledge needs to be $25");

// 3
const input3 = document.getElementById("pledge3");
const error3 = document.getElementById("small3");

validateInput(input3, error3, "Minimum pledge needs to be $75");

// 4
const input4 = document.getElementById("pledge4");
const error4 = document.getElementById("small4");

validateInput(input4, error4, "Minimum pledge needs to be $200");


// Form Element 
function handleSubmit(e) {
  e.preventDefault();
  if (validateInput(pledge, stock)) {

    let stockAmount = 1;

    stockAmount--;
    stock.innerHTML = stockAmount;

    // OUTPUT 4
    const output1 = document.getElementById("currentAmount");
    const output2 = document.getElementById("currentBackers");

    let currentAmount = 89914;

    const totalAmount = parseInt(currentAmount) + parseInt(input.value);
    output.innerHTML = "$" + new Intl.NumberFormat().format(totalAmount);

    let currentBackers = 5007;

    currentBackers++;
    output.innerHTML = new Intl.NumberFormat().format(currentBackers);
    console.log(currentBackers);

    completion_message.classList.add("display_completion_message");
    document.getElementById("pledgeList").style.display = "none";
  }
}

form1.addEventListener("submit", (e) => {
handleSubmit(e, "pledge1", "stock1")
});
form2.addEventListener("submit", (e) => {
handleSubmit(e, "pledge2", "stock2")
});
form3.addEventListener("submit", (e) => {
handleSubmit(e, "pledge3", "stock3")
});
form4.addEventListener("submit", (e) => {
handleSubmit(e, "pledge4", "stock4")
}); 
*/

// Select Reward Buttons 
const selectBtns = document.querySelectorAll(".selectBtn");
//console.log(selectBtns);

// Display Pledgelist via Reward Buttons:
selectBtns.forEach((btn)=>{
  btn.onclick = display_pledgeList;
});

// Remove Display Completion Message & Overlay:
const completion_btn = document.getElementById("completion_btn");

completion_btn.addEventListener("click", () => {
  completion_message.classList.remove("display_completion_message");
  overlay.style.display = "none";
});

