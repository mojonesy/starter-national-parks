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