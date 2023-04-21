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

function readMoreLess(readClass, moreClass)
{
  const readMoreBtn = document.querySelector(readClass);
  const moreText = document.querySelector(moreClass);

  // add a click event listener to the button
  readMoreBtn.addEventListener('click', function() {
    // if the additional text is hidden, show it and change the button text to "Read less"
    if (moreText.style.display === 'none') {
      moreText.style.display = 'inline';
      readMoreBtn.textContent = 'Read less';
    } 
    // if the additional text is showing, hide it and change the button text to "Read more"
    else {
      moreText.style.display = 'none';
      readMoreBtn.textContent = 'Read more';
    }
  })
}


document.addEventListener("DOMContentLoaded", ()=>{

    currentLink();
    displayCurrentTime();
    let timer = setInterval( displayCurrentTime, 1000 );
});
