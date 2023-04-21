"use strict";


const $ = selector => document.querySelector(selector);

function currentLink(){
    document.querySelectorAll(".nav-link").forEach
    (link => {
        if(link.href === window.location.href)
        {
            link.setAttribute('aria-current', 'page')
        }
    })
}


document.addEventListener("DOMContentLoaded", ()=>{

    currentLink();
    
});

        