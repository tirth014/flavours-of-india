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
// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }

document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtn = document.querySelector('.read');
  const moreText = document.querySelector('.more');

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
  });
});
