const firstBtn = document.querySelector("button");
    // Select the first button
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
}); /* The event handler (event) accepts a single parameter that 
    represents an event object, containing details about the event. */

firstBtn.addEventListener("click", (event) => {
    console.log(event.target);
}); /* Log the specific element that fired the event. */




const allBtns = document.querySelectorAll(".rate-button");
    // Select all buttons for all parks

allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log(event.target);
    });
}); /* Iterate through the list of buttons and add an 
       event handler to each one. */

allBtns.forEach((btn) => {
    btn.addEventListener("click", event => {
        console.log(event.target.parentNode);
    });
}); /* Iterate through the list of buttons and add an
       event handler to each one, logging it's parent <section> element. */

allBtns.forEach((btn) => {
    btn.addEventListener("click", event => {
        const park = event.target.parentNode;
        park.style.backgroundColor = "#c8e6c9";
    });
});     // Changes the background color of each parent <section> element.




// // Select the 'nameSorter' link
// const nameSorter = document.querySelector("#name-sorter");

// // Add an event listener (select link by id)
// nameSorter.addEventListener("click", event => {
//     // prevent the link from reloading the page
//     event.preventDefault(); 
//     // Get the main element
//     const main = document.querySelector("main");
//     // Get NodeList of parks
//     const parkList = document.querySelectorAll(".park-display");
//     // Empty the main element
//     main.innerHTML = "";
//     // Create an array from the NodeList
//     const parksArray = Array.from(parkList);
//     // Sort the array
//     parksArray.sort((parkA, parkB) => {
//         const parkAName = parkA.querySelector("h2").innerText;
//         const parkBName = parkB.querySelector("h2").innerText;
//         if (parkAName < parkBName) {
//             return -1;
//         } else if (parkAName > parkBName) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });
//     // Insert each park back into the DOM, in order
//     parksArray.forEach((park) => {
//         main.appendChild(park);
//     });
// });

/* OR REFACTOR THIS AND CREATE AN EXTERNAL FUNCTION FOR THE EVENT HANDLER,
   AND ANOTHER FUNCTION FOR THE SORTING (BELOW) */

// Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  
  // Function for handling the `nameSorter` click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");
  
  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);


//------//
// DOMContentLoaded event handler
console.log("Before!");

window.addEventListener("DOMContentLoaded", event => {
    console.log("Loaded!");
});

console.log("After!");