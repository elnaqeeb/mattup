var x = 1;
var lat = 0;
var lon = 0;
var y = document.cookie;

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
    lat = position.coords.latitude;
    lon = position.coords.longitude;
}

function addcookie() {
    getLocation();
    if (lat != 0) {

        setCookie(x, lat + "," + lon, 1);
        x++;
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function printlist() {
    document.getElementById("locations").innerHTML = document.cookie;
}

function clearlist() {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    x = 1;
}