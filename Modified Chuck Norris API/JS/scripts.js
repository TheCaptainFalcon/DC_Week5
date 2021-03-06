"use strict";

// Init 
let category = "dev";

const refreshQuoteButton = document.querySelector("#refreshQuote");
const submitFormButton = document.querySelector("#submitForm");
const categoryChangeForm = document.querySelector("#categoryChangeForm");
const closeModalButton = document.querySelector("#closeModal");

const inputSelector = document.querySelector("#inputSelect");
const selectorButton = document.querySelector("#selectButton");


function getQuote(category){
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const chuckSaysParagraph = document.querySelector("#chuckSays");
    const modalWindow = document.querySelector(".modal-overlay");

    get(apiUrl).then(function(response){
        chuckSaysParagraph.innerHTML = response.value;
        modalWindow.classList.toggle("open");
    });
}

function getCategories() {
    const apiUrl = "https://api.chucknorris.io/jokes/categories";
    const categorySelectLabel = document.querySelector("#categorySelectLabel");

    get(apiUrl).then(function(response){
        const categoryList = response.filter(function(category){
            if (category != "explicit") {
                return category;
            }
        });

        const categoryElement = document.createElement("select");

        categoryList.map(function(category){
            const categoryOption = document.createElement("option");
            categoryOption.value = category;
            categoryOption.text = category;
            categoryElement.append(categoryOption);
        });
        categorySelectLabel.appendChild(categoryElement)
    });
}

refreshQuoteButton.addEventListener("click", function(event){
    event.preventDefault();
    getQuote(category);
});

submitFormButton.addEventListener("click", function(event){
    event.preventDefault();
    const categoryInput = document.querySelector("#categoryChangeForm select");

    category = categoryInput.value;
    getQuote(category);
});


closeModalButton.addEventListener("click", function(event){
    const modalWindow = document.querySelector(".modal-overlay");
    modalWindow.classList.toggle("open");
});

selectorButton.addEventListener("click", function(event){
    event.preventDefault();
    const inputSelected = document.querySelector("#inputSelect");
    category = inputSelected.value;

    getQuote(category);
});


getQuote(category);
getCategories();