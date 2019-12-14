function getLocation() {
    // Check whether browser supports Geolocation API or not
    if (navigator.geolocation) { // Supported

        // To add PositionOptions

        navigator.geolocation.getCurrentPosition(getPosition);
    } else { // Not supported
        alert("Oops! This browser does not support HTML Geolocation.");
    }
}

function getPosition(position) {
    document.getElementById("location").innerHTML =
        "Latitude: " + position.coords.latitude + "<br>" +
        "Longitude: " + position.coords.longitude;
}