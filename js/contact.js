"use strict";


const $ = selector => document.querySelector(selector);

let a = 0;

function remainingWords()
{
    let message = $("#message").value;
    let remainingWords = $("#remaining_words");
    remainingWords.innerHTML = "50 Characters Remaining"
    remainingWords.innerHTML = Math.abs((message).length-50) + " Characters Remaining";
    
    if(message.length >= 50)
    {
        $("#message").style.color = "red";
        $("#message_error").innerHTML = "Character Limit Reached!";
        $("#message_error").style.color = "red";
        $("#submit").disabled = "true";
    }
    else{
        $("#message").style.color = "black";
        $("#message_error").innerHTML = "";
        $("#submit").removeAttribute('disabled');

    }
}

function emailv()
{
    const email = $("#e-mail").value;
    const regx = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    if(email == "" || email == null)
    {
        $("#email_error").innerHTML = "Please Enter an E-mail";
        $("#email_error").style.color = "red";
    }else if(!regx.test(email))
    {
        $("#email_error").innerHTML = "E-mail is not valid";
        $("#email_error").style.color = "red";
    }
    else{
        $("#email_error").innerHTML = "";
    }
}

function namev()
{
    const name = $("#name").value;
    if(name == "" || name == null)
    {
        $("#name_error").innerHTML = "Please Enter a Name";
        $("#name_error").style.color = "red";
    }
    else{
        $("#name_error").innerHTML = "";
    }
}

function phonev()
{
    const phone = $("#tel").value;
    const phone_regx = /^\d{3}-\d{3}-\d{4}$/;

    if(phone == "" || phone == null)
    {
        $("#phone_error").innerHTML = "Please Enter a Phone Number";
        $("#phone_error").style.color = "red";
    }else if(!phone_regx.test(phone))
    {
        $("#phone_error").innerHTML = "Phone number is not valid";
        $("#phone_error").style.color = "red";
    }
    else{
        $("#phone_error").innerHTML = "";
    }
}

function validate()
{
    if($("#phone_error").innerHTML == "" &&  $("#email_error").innerHTML == "" && $("#name_error").innerHTML == "")
    {
        alert("Message Sent!");
    }
    else
    {
        alert("Fields Remaining/Wrong entry!");
    }
}

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

    $("#submit").addEventListener("click", validate);
    remainingWords();

    currentLink();
    
});