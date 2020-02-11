"use strict";

let category = "dev";

const refreshQuoteButton = document.querySelector("#refreshQuote");
const submitFormButton = document.querySelector("#submitForm");


function getQuote(category){
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const chuckSaysParagraph = document.querySelector("#chuckSays");

    get(apiUrl).then(function(response){
        chuckSaysParagraph.innerHTML = response.value;
    });

}

refreshQuoteButton.addEventListener("click", function(event){
    event.preventDefault();
    getQuote(category);
});

submitFormButton.addEventListener("click", function(event){
    event.preventDefault();
    const categoryInput = document.querySelector("#categoryInput");

    category = categoryInput.value;
    getQuote(category);
});

getQuote(category);