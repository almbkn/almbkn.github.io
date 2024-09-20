var welcome;
var welcomeBody;
var games;
var gamesBody;
var portfolio;
var portfolioBody;
// var resume;
// var resumeBody;
var contact;
var contactBody;
var loaded = false;

document.addEventListener("DOMContentLoaded", function(event) {
    buttons = document.querySelectorAll("#navigation button");
    welcome = document.querySelector("#welcome");
    welcomeBody = document.querySelector("#welcome-content")
    games = document.querySelector("#games");
    gamesBody = document.querySelector("#games-content");
    portfolio = document.querySelector("#portfolio");
    portfolioBody = document.querySelector("#portfolio-content")
    // resume = document.querySelector("#resume");
    // resumeBody = document.querySelector("#resume-content")
    contact = document.querySelector("#contact");
    contactBody = document.querySelector("#contact-content")
    loaded = true;
    
});

document.addEventListener("click", function(event) {
    if (!loaded) {
        return;
    }
    if (event.target.matches("#welcome-button")) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    if (event.target.matches("#games-button")) {
        document.querySelector("#games").scrollIntoView({behavior: 'smooth'});
    }
    if (event.target.matches("#portfolio-button")) {
        document.querySelector("#portfolio").scrollIntoView({behavior: 'smooth'});
    }
    // if (event.target.matches("#resume-button")) {
    //     document.querySelector("#resume").scrollIntoView({behavior: 'smooth'});
    // }
    if (event.target.matches("#contact-button")) {
        document.querySelector("#contact").scrollIntoView({behavior: 'smooth'});
    }
});

