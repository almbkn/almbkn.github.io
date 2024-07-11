var mainContent;
var about;
var resume;
var projects;
var contact;
var loaded = false;

document.addEventListener("DOMContentLoaded", function(event) {
    mainContent = document.querySelector("#main-content");
    about = document.querySelector("#about-content");
    resume = document.querySelector("#resume-content");
    projects = document.querySelector("#projects-content");
    contact = document.querySelector("#contact-content");
    buttons = document.querySelectorAll(".navbar button");
    console.log(buttons);
    loaded = true;
});

document.addEventListener("click", function(event) {
    if (!loaded) {
        return;
    }
    if (event.target.matches("#about-button")) {
        mainContent.innerHTML = "";
        mainContent.appendChild(about.content.cloneNode(true));
    }
    if (event.target.matches("#resume-button")) {
        mainContent.innerHTML = "";
        mainContent.appendChild(resume.content.cloneNode(true));
    }
    if (event.target.matches("#projects-button")) {
        mainContent.innerHTML = "";
        mainContent.appendChild(projects.content.cloneNode(true));
    }
    if (event.target.matches("#contact-button")) {
        mainContent.innerHTML = "";
        mainContent.appendChild(contact.content.cloneNode(true));
    }
});

