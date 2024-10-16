
//region Navigation
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
menuIcon.addEventListener('click', toggleNav);
//endregion


//region Map
// Where you want to render the map.
var mapElement = document.getElementById('map');

// Height has to be set. You can do this in CSS too.

// Create Leaflet map on map element.
var map = L.map(mapElement);

// Add OSM tile layer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Target's GPS coordinates.
var markerMain = L.latLng('46.60994806487777', '14.305320368435025');   //Schule

// Set map's center to target with zoom 14.
map.setView(markerMain, 13);

// Place a marker on the same location.
L.marker(markerMain).addTo(map);
//endregion



