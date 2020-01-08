var count=1;
var lat=0;
var lng=0;
var map;
var marker;
var map3;
var infoWindow;
var info;
const map_Holder=document.getElementById("Map");
const mapwithmarkerholder=document.getElementById("mapwithmarker");
var myLatLng = new google.maps.LatLng({lat: 31, lng: 31});


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function printlist() {
    document.getElementById("locations").innerHTML = document.cookie;
}

function clearcookie() {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    
}





function ShowInteractiveMap(){
	
    map = new google.maps.Map(map_Holder, {center: {lat:31,lng:31}, zoom: 9});
	infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
			  inform(map,myLatLng)
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
	
	
	google.maps.event.addListener(map, 'click', function(event) {
  		mark(map,event.latLng);		
	});
	
}

function mark(map,latlong){
	
	marker = new google.maps.Marker({  position:latlong,  animation:google.maps.Animation.BOUNCE,draggable:true,map:map});
}
function inform(map,latlong){
	info= new google.maps.InfoWindow;
	info.setPosition(latlong);
	info.setContent('startpoint');
	info.open(map);
}


function loadpage(){
	
	ShowInteractiveMap();
	clearcookie();
	mark(map,myLatLng);
	inform(map,myLatLng);

}




      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map3);
	  }