// console.log(document);

// const heading = document.querySelector("h1");
// console.log(heading);

// const firstVal = document.querySelector(".value");
// console.log(firstVal);

// console.log(document.querySelector("button"));

// console.log(document.querySelector(".area-display"));

// console.log(document.querySelector(".stat div"));

// console.log(document.querySelector(".hello"));



// const buttons = document.querySelectorAll("button");
// console.log(buttons);



// // Get a list of all '<h3>' elements
// const heading3List = document.querySelectorAll("h3");

// for (let i = 0; i < heading3List.length; i++) {
//     const element = heading3List[i];
//     console.log(element);
// }
// // Iterate over the list and log each one
// for (let element of heading3List.values()) {
//     console.log(element);
// }

// const ratingList = document.querySelectorAll(".rating-display div");
// for (let element of ratingList.values()) {
//     console.log(element);
// }

// const areaList = document.querySelectorAll(".area-display div");
// for (let i = 0; i < areaList.length; i++) {
//     const element = areaList[i];
//     console.log(element);
// }




// // For older browser support:
// // Get a list of descriptions
// const list = document.querySelectorAll(".description-display");

// // Log them to the console
// Array.prototype.forEach.call(list, function (element) {
//   console.log(element);
// });



// innerText method
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText; // innerText value of each description
    
    if (content.length > 250) {
        content = content.slice(0, 250);
        content += '<a href="#">...</a>';
    }
    console.log(content);
    // desc.innerText = content; // content displayed as 250 character w/ unclickable link at the end.

    desc.innerHTML = content; // "..." link is clickable
}


// Changing the style of an element
const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    console.log(ratingValue);

    // if (ratingValue > 4.7) {
    //     rating.style.fontWeight = "bold";
    //     rating.style.backgroundColor = "green";
    // }
    // OR:

    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
}


// Creating new elements
const parks = document.querySelectorAll(".park-display");
    // first, select the parks on the page
const numberParks = parks.length;
    // second, get the number of parks on the page
const newElement = document.createElement("div");
    // next, create a new empty element (using a <div>)
newElement.innerText = `${numberParks} exciting parks to visit`;
    // Since you have access to all the properties/methods use above,
    //set the newElement text with the .innerText property
newElement.classList.add("header-statement");
    // Add the new .header-statement class to the new element's classList
const header = document.querySelector("header");
header.appendChild(newElement);
    // Add newElement to the DOM by selecting the <header> element and 
    //then using appendChild() to add it to the <header>

// Remove an element
const main = document.querySelector("main");
    // Get parent element of all parks
const park = main.querySelector(".park-display");
    // Select the first park inside <main>
// main.removeChild(park);
    // Remove the park