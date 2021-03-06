"use strict;"

class Geolocalizador {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this),
            this.viewErrors.bind(this));
    }

    getPosition(position) {
        this.message = "Se ha realizado correctamente la petición de geolocalización";
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

    viewErrors(error) {
        switch(error.code){
            case error.PERMISSION_DENIED:
                this.message = "El usuario no ha permitido la petición de geolocalización";
                break;
            case error.POSITION_UNAVAILABLE:
                this.message = "Información de geolocalización no disponible";
                break;
            case error.TIMEOUT:
                this.message = "La petición de geolocalización ha caducado";
                break;
            case error.UNKNOWN_ERROR:
                this.message = "Error desconocido";
                break;
        }
    }

    show(where){
        var ubicacion = document.getElementById(where);
        var datos = '';
        
        datos += '<h2>'+this.message+'</h2>';
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