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
        name: "repox cli",
        url: "https://npmjs.com/package/repox-cli",
        about: "Manage your GitHub repositories directly from your terminal"
    },
];

const projectsContainer = document.getElementById("projects");

projectsJSON.forEach(project => {
    const projectHolder = document.createElement("p");
    projectHolder.innerHTML = `<a href="${project.url}" target="_blank">${project.name}</a> : ${project.about}`;
    projectsContainer.appendChild(projectHolder);
});


