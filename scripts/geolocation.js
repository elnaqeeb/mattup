// JavaScript Document
var c=1;
var lat=0;
var lng=0;
function getLocation() {
	
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
   
  }


function showPosition(position) {
 lat= position.coords.latitude;
 lng=position.coords.longitude;
	document.cookie=c+"="+"{lat:"+lat+",lng:"+lng+"}";
	}

