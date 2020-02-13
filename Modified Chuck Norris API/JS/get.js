"use strict";

function get(url) {
    return fetch(url)
    .then(function(response){
        return response.json();

    })
    .then(function(data){
        return data;
    })
    .catch(function(error){
        return error;
    });
}

//Ex comparison of top and bottom

// const get = function(url){
//     return fetch(url)
//     .then(response => response.json())
//     .then(data => data);
// }

