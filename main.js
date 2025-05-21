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
