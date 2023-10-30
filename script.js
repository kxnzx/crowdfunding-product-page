// Using strict mode helps you to catch and identify certain errors
"use strict";

const pL_button = document.getElementById("pledgeList_button");
const close_pL = document.getElementById("close_pledgeList");
const radioButtons = document.querySelectorAll("input");

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
  radio.addEventListener("click", handleRadioClick);
});

function handleRadioClick() {
  if (document.getElementByTagName("input").checked) {
    form.style.display = "block";
  } else {
    property.radio.checked = false;
  }
}

/*const box = document.getElementById("box");
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
