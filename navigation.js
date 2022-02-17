// Function to open and close User Box (top right corner)

// To do: add function that closes User Box on outside click

const userBox = document.querySelector(".wdgt-user-box");
const userBtn = document.querySelector(".wdgt-login");

function toggleUserBox() {
    if (userBox.style.display === "block") {
        userBox.style.display = "none";
    }
    else {
        userBox.style.display = "block";
    }
}
userBtn.addEventListener("click", toggleUserBox);



// Function to open and close Mobile Navigation Bar

// To do: add function that forces navigation bar open during Desktop Version

const menu = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}
hamburger.addEventListener("click", toggleMenu);