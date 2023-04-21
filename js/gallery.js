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

function search() {
    const searchInput = document.getElementById('search-input');
    const galleryItems = document.querySelectorAll('.li_gallery');

    searchInput.addEventListener('keyup', function() {
      const searchTerm = searchInput.value.toLowerCase();

      galleryItems.forEach(function(item) {
        const imgAlt = item.querySelector('a').getAttribute('data-title').toLowerCase();

        if (imgAlt.includes(searchTerm)) {
          item.style.display = 'block';
          item.style.width = '100%';
          item.style.height = '400px';
          item.style.objectFit = 'cover';
          console.log(item.parentNode);
            item.parentNode.style.width = '400px';
            // item.childNodes[1].style.width = '400px';
            // item.childNodes[1].style.minWidth = '0';
        } else {
          item.style.display = 'none';
        }
      });
    });
}

document.addEventListener("DOMContentLoaded", ()=>{

    currentLink();
    displayCurrentTime();
    let timer = setInterval( displayCurrentTime, 1000 );

    let searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
});
