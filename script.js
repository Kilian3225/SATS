// Get the menu icon element
let menuIcon = document.querySelector('.menuIcon');


// Function to toggle the navigation
function toggleNav()
{
    let sideNav = document.querySelector(".sideNav");
    if (sideNav.style.height === "100%")
    {
        // Close the nav
        sideNav.style.height = "0";
        menuIcon.style.fontSize = "25px";
        menuIcon.innerHTML = "&#9776;"; //burger
        document.getElementsByClassName("overlay")[0].style.display = "none";

    } else {
        // Open the nav
        sideNav.style.height = "100%";
        menuIcon.style.fontSize = "40px";
        menuIcon.innerHTML = "&times;"; //X
        document.getElementsByClassName("overlay")[0].style.display = "block";
    }
    console.log("icon set to:" + menuIcon.innerHTML);
    console.log("overlay set to:" + document.getElementsByClassName("overlay")[0].style.display);
}

// Add click event listener to the menu icon
menuIcon.addEventListener('click', toggleNav);
