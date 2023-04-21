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

function openModal(categories_name, modal_id, close_btn)
{
    const openBtn = $(categories_name);
    const closeBtn = $(close_btn);
    const modal = $(modal_id);

    // modal.showModal();

    openBtn.addEventListener("click", ()=>
    {
        console.log(categories_name);
        modal.showModal();
    })

    closeBtn.addEventListener("click", ()=>
    {
        modal.close();
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
   
    $("#nextBtn").addEventListener("click", () =>
    {
        $(".breakfast").scrollLeft += 300;
    })

    $("#backBtn").addEventListener("click", () =>
    {
        $(".breakfast").scrollLeft -= 300;
    })
});