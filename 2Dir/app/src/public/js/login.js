"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginbutton = document.querySelector("button");

loginbutton.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
}