// Using strict mode helps you to catch and identify certain errors
"use strict";

const pL_button = document.getElementById("pledgeList_button");
const close_pL = document.getElementById("close_pledgeList");
const radioButtons = document.querySelectorAll("input[type=radio]");

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
