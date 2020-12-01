"use strict;"

class GeoMap {
    constructor() { }

    initialize() {
        var center = {lat: 43.3672702, lng: -5.8502461};
        var geoposition = new google.maps.Map($('div')[0],{
            zoom: 8,
            center:center,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var info = new google.maps.InfoWindow;
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                var pos = {
                    lat: position.coords.latitude, lng: position.coords.longitude
                };
            info.setPosition(pos);
            info.setContent("Usted está aquí");
            info.open(geoposition);
            geoposition.setCenter(pos);
            }, function() {
                handleErrors(true, info, geoposition.getCenter());
            });
        }
        else {
            handleErrors(false, info, geoposition.getCenter());
        }
    }

    showError(geolocated, info, pos) {
        info.setPosition(pos);
        if (geolocated == true){
            info.setContent("Error de geolocalización");
        }
        else {
            info.setContent("El navegador no soporta la geolocalización");
        }
        info.open(geoposition);
    }
}

var map = new GeoMap();