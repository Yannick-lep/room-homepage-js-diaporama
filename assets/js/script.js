const slideTexts = document.querySelector(".txtDiscover");
const slideBackground = document.querySelector("#imgDiscover");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let slideIndex = 0;

document.querySelector('#previous').addEventListener('click', () => {
    showTxtDiscover(currentTxtDiscoverIndex = currentTxtDiscoverIndex +1);
})