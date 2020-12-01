"use strict;"

class Geolocalizador {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
    }

    getPosition(position) {
        this.longitud = position.coords.longitude;
        this.latitud = position.coords.latitude;
        this.precision = position.coords.accuracy;
        this.altitud = position.coords.altitude;
        this.precisionAltitud = position.coords.altitudeAccuracy;
        this.rumbo = position.coords.heading;
        this.velocidad = position.coords.speed;
    }

    getLongitud() {
        return this.longitud;
    }

    getLatitud() {
        return this.latitud;
    }

    getAltitud() {
        return this.altitud;
    }

    show(where){
        var ubicacion = document.getElementById(where);
        var datos = '';
        
        datos += '<p>Longitud: '+this.longitud+' grados</p>';
        datos += '<p>Latitud: '+this.latitud+' grados</p>';
        datos += '<p>Precisión de la latitud y la longitud: '+this.precision + ' metros</p>';
        datos += '<p>Altitud: '+this.altitud + ' metros</p>';
        datos += '<p>Precisión de la altitud: '+ this.precisionAltitud + ' metros</p>';
        datos += '<p>Rumbo: '+this.rumbo + ' grados</p>';
        datos += '<p>Velocidad: '+this.velocidad + ' metros/segundo</p>';

        ubicacion.innerHTML = datos;
    }
}

var geolocalizador = new Geolocalizador();