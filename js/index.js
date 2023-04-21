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

const displayCurrentTime = () => {
    const d = new Date();
    let minutes = d.getMinutes();
    let hours = d.getHours();
    let seconds = d.getSeconds();
        
    if(hours >= 12)
    {
        $("#ampm").innerHTML = "PM";
    }
    else
    {
        $("#ampm").innerHTML = "AM";
    }

    if(hours>12)
    {
        $("#hours").innerHTML = hours-12;
    }
    else if(hours == 0)
    {
        $("#hours").innerHTML = hours+12;
    }
    else{
        $("#hours").innerHTML = hours;
    }
    $("#minutes").innerHTML = minutes;
    $("#seconds").innerHTML = seconds;
};


document.addEventListener("DOMContentLoaded", ()=>{

    currentLink();
    displayCurrentTime();
    timer = setInterval( displayCurrentTime, 1000 );
});