console.log("hello world");

// Buttons
let homeBtn = document.getElementById("homeBtn");
let aboutBtn = document.getElementById("aboutBtn");

// Divs
let about = document.getElementsByClassName("about")[0];
let portfolio = document.getElementsByClassName("portfolio")[0];

function showAboutMe() {
    about.style.display = "block";
    portfolio.style.display = "none";
}

function showPortfolio() {
    portfolio.style.display = "block";
    about.style.display = "none";
}

aboutBtn.addEventListener('click', function () {
    // console.log("About Clicked");
    showAboutMe();
});

homeBtn.addEventListener('click', function () {
    // console.log("Portfolio Clicked");
    showPortfolio();
});




/*
=================================================
projects
=================================================
*/

const projectsJSON = [
    {
        name: "study tymer",
        url: "https://github.com/tahsinzidane/studyTymer",
        about: "Clean, no-nonsense study timer with custom sessions and auto break switching. \nFocus better, hustle smarter. <a href='https://tahsinzidane.github.io/studyTymer/'>click here to visit the app</a>"
    },
    {
        name: "emoji selector ",
        url: "https://github.com/tahsinzidane/emoji-verse?tab=readme-ov-file#emoji-verse",
        about: "A simple emoji selector app built for Linux distributions. \nCrafted with Electron, it offers an easy way to search and copy emojis right from your desktop."
    },
];

const projectsContainer = document.getElementById("projects");

projectsJSON.forEach(project => {
    const projectHolder = document.createElement("p");
    projectHolder.innerHTML = `<a href="${project.url}" target="_blank">${project.name}</a> : ${project.about}`;
    projectsContainer.appendChild(projectHolder);
});


