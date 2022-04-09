console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const firstVal = document.querySelector(".value");
console.log(firstVal);

console.log(document.querySelector("button"));

console.log(document.querySelector(".area-display"));

console.log(document.querySelector(".stat div"));

console.log(document.querySelector(".hello"));



const buttons = document.querySelectorAll("button");
console.log(buttons);



// Get a list of all '<h3>' elements
const heading3List = document.querySelectorAll("h3");

for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
}
// Iterate over the list and log each one
for (let element of heading3List.values()) {
    console.log(element);
}

const ratingList = document.querySelectorAll(".rating-display div");
for (let element of ratingList.values()) {
    console.log(element);
}

const areaList = document.querySelectorAll(".area-display div");
for (let i = 0; i < areaList.length; i++) {
    const element = areaList[i];
    console.log(element);
}




// For older browser support:
// Get a list of descriptions
const list = document.querySelectorAll(".description-display");

// Log them to the console
Array.prototype.forEach.call(list, function (element) {
  console.log(element);
});