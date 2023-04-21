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
    let timer = setInterval( displayCurrentTime, 1000 );

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    // document.getElementById('DATE').value = formattedToday;

    $("#date").innerHTML = formattedToday;
});