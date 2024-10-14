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
        menuIcon.innerHTML = "&#9776;";
        document.getElementsByClassName("nav")[0].classList.remove('open');
        document.getElementsByClassName("overlay")[0].style.display = "none";
        document.body.classList.remove('nav-open');

    } else
    {
        // Open the nav
        sideNav.style.height = "100%";
        menuIcon.innerHTML = "&times;";
        document.getElementsByClassName("nav")[0].classList.add('open');
        document.getElementsByClassName("overlay")[0].style.display = "block";
        document.body.classList.add('nav-open');
    }
    console.log("icon set to:" + menuIcon.innerHTML);
}

// Add click event listener to the menu icon
menuIcon.addEventListener('click', toggleNav);
