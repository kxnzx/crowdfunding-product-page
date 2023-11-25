# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Screenshot

#### Screensize 1440px - Desktop

![Desktop](/images/Desktop.gif)

#### Screensize 375px - Mobile

![Mobile](/images/Mobile.gif)

### Links

- View my Solution on [Frontend Mentor]()
- View the [Live Site](https://kxnzx.github.io/crowdfunding-product-page/)

## My process

- HTML semantics
- JavaScript
- Importing Google Fonts
- Set variables
- Reset default settings
- Styles (Mobile First)

### Built with

- Semantic HTML5 markup
- JavaScript
- SASS custom properties
- CSS Grid
- CSS Flexbox
- Mobile-first workflow
- [Google Fonts](https://fonts.google.com/) - For Fonts

### What I learned

I have learned many things during the making of this project. The one thing that stood out the most for me is learning about the parentElement Property. There are many different ways to traverse through the DOM in JavaScript. One way is by navigating up the tree DOM and select an ancestor of an element. 

Here it was my goal to perform actions on the parent element of the parent element of radio. This is how I did it:

```JS
const form = radio.parentElement.parentElement.querySelector("form");
```

I needed to select the element ("form") which is nested inside it's parent element ```<section class="modal">```. The parent element of radio is ```<div class="gridBox">``` and his parent element is ```<section class="modal">```. 

```html
 <section class="pledgeList" id="pledgeList">
    <div class="flexBox">
      <h2>Back this project</h2>
      <button id="close_pledgeList"><img src="./images/icon-close-modal.svg" alt="" /></button>
    </div>
    <p>
      Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
      the world?
    </p>
    <section class="modal">
      <div class="gridBox">
        <label for=""></label><input type="radio" name="radioButton">
        <h3 class="modalH3">Pledge with no reward</h3>
        <p style="visibility: hidden;">No Reward</p>
      </div>
      <p>
        Choose to support us without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product updates
        via email.
      </p>
      <!-- Selected pledge start -->
      <form id="form1" action="">
        <hr>
        <fieldset>
          <legend>Enter your pledge</legend>
          <label for=""></label><input class="inputPledge" id="pledge1" type="text" placeholder="$Custom"></input>
          <small id="small1"></small>
          <button id="continueButton1" type="submit" class="continueButton">Continue</button>
        </fieldset>
      </form>
    </section>
```

```js
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
```

## Author

- Frontend Mentor - [@kxnzx](https://www.frontendmentor.io/profile/kxnzx)

