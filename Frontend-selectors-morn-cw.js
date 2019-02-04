// 1. Print the first p tag to the console using the ID, class, and tag selectors.
var pId = document.getElementById("first");
console.log("first");
var pClass = document.getElementsByClassName("special");
console.log("special")
var pTagSelectors = document.getElementsByTagName("p");
console.log("p")

// 2. Print the special class using both the query selector and query all selector.
var idSpecial = document.querySelector("#special");
console.log("#special");
var idSpecial = document.querySelectorAll(#special);


// 3. Change the color of the h1 statement to blue.
function changeColor(blue) {
    var elem = document.getElementById('header');
    elem.style.color = blue;
}

// 4. Change the color of the last p tag to yellow.
function changeColor(yellow) {
    var elem = document.getElementById('last');
    elem.style.color = yellow;
}
