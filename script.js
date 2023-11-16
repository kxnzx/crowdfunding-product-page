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

// Toggle Menu 
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

const menu = document.getElementById("menuList");
const open_menu = document.getElementById("open_menu");
const close_menu = document.getElementById("close_menu");

  // If it's true that the menu class contains the displayMenu class, do this:
  if (menu.classList.contains("displayMenu")) {
    // Execute this block of code if the specified condition is true:
    menu.classList.remove("displayMenu");
    close_menu.style.display = "none";
    open_menu.style.display = "block";
    menu.style.display = "none";
  }
  // If it's false that the menu class contains the showMenu class, do this:
  else {
    // Execute this block of code if the specified condition is false:
    menu.classList.add("displayMenu");
    close_menu.style.display = "block";
    open_menu.style.display = "none";
    menu.style.display = "block";
  }
})

// Display Completion Message
const completion_message = document.querySelector(".completion_message");

// Display list with Radio Buttons
function display_pledgeList() {
  document.getElementById("pledgeList").style.display = "block";
}

// Call the function display_pledgeList() when pledgeList_button is clicked
pL_button.onclick = display_pledgeList;

// Close list with Radio Buttons
function close_pledgeList() {
  document.getElementById("pledgeList").style.display = "none";
}

// Call the function close_pledgeList() when close_pledgeList button is clicked
close_pL.onclick = close_pledgeList;

// Display text in button when screen resizes 
const resize = window.matchMedia("(min-width: 700px)");

function addBtnText(resize) {
  if (resize.matches) { // If media query matches
    document.getElementById("buttontext").innerText += "Bookmark";
  }
}

resize.addListener(addBtnText); 

// Remove text in button when screen resizes 
const resizeMobile = window.matchMedia("(max-width: 700px)");
console.log(resizeMobile);

function removeBtnText(resizeMobile) {
  if (resizeMobile.matches) { // If media query matches
    location.href = location.href;
  } 
}

resizeMobile.addListener(removeBtnText);

// Bookmark Button toggle
bookmark_btn.addEventListener("click", () => {

  const bookmarkOff = document.getElementById("bookmark_img_off");
  const bookmarkOn = document.getElementById("bookmark_img_on");
  let btnTxt = document.getElementById("buttontext").innerHTML;
 
    if(bookmarkOff.style.display !== 'none')
    {
    bookmarkOff.style.display = 'none';
    bookmarkOn.style.display = 'block';
    document.getElementById("buttontext").innerHTML = btnTxt.replace("Bookmark", "Bookmarked");
    console.log(btnTxt);
    } else
    {  
    bookmarkOff.style.display = 'block';
    bookmarkOn.style.display = 'none';
    document.getElementById("buttontext").innerHTML = btnTxt.replace("Bookmarked", "Bookmark");
    }
});


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

// Select Reward Buttons 
const selectBtns = document.querySelectorAll(".selectBtn");
//console.log(selectBtns);

// Display Pledgelist 
selectBtns.forEach((btn)=>{
  btn.onclick = display_pledgeList;
});
  