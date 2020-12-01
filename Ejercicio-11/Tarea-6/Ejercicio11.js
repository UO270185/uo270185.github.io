"use strict;"

class GeoMap {
    constructor() { }

    initialize(lati, long) {
        var centro = {lat: lati, lng: long};
        var mapaPosicion = new google.maps.Map(document.getElementById('mapa'), {zoom: 8, center: centro});
        var marcador = new google.maps.Marker({position:centro, map:mapaPosicion});
    }
}

var map = new GeoMap();