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


document.addEventListener("DOMContentLoaded", ()=>{

    currentLink();
    
   
});