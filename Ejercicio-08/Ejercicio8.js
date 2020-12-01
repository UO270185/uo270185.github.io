"use strict";

class Meteo {
    constructor(ciudad) {
        this.apikey="769077a34c5da6cbbdc82c4da4c5e0e5";
        this.ciudad=ciudad;
        this.codigoPais = "ES";
        this.unidades="&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad +","+this.codigoPais+ this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.success = "JSON recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>";
    }

    cargarDatos() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos) {
                $("pre").text(JSON.stringify(datos, null, 2));
                var str = "<ul><li>Ciudad: "+datos.name+"</li>";
                str += "<li>País: "+datos.sys.country + "</li>";
                str += "<li>Latitud: "+datos.coord.lat+ " grados</li>";
                str += "<li>Longitud: "+datos.coord.lon+ " grados</li>";
                str += "<li>Temperatura: "+datos.main.temp+" C</li>";
                str += "<li>Temperatura máxima: "+datos.main.temp_max+" C</li>";
                str += "<li>Temperatura mínuma: "+datos.main.temp_min+" C</li>";
                str += "<li>Presión: "+datos.main.pressure+" mb</li>";
                str += "<li>Humedad: "+datos.main.humidity+ " %</li>";
                str += "<li>Amanecer: "+new Date(datos.sys.sunrise*1000).toLocaleTimeString()+"</li>";
                str += "<li>Anochecer: "+new Date(datos.sys.sunset*1000).toLocaleTimeString()+"</li>";
                str += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                str += "<li>Velocidad del viento: " + datos.wind.speed + " m/s</li>";
                str += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                str += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                str += "<li>Descripción: " + datos.weather[0].description + "</li>";
                str += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                str += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                str += "<img src=\"https://openweathermap.org/img/w/"+datos.weather[0].icon+".png\"alt=\"Imagen meteorológica\"/></a>";
                $("p").html(str);
            }, 
            error: function() {
                $("h3").html("No se ha podido obtener la información de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
            }
        });
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }

    borrarTodo() {
        $("h3").remove();
        $("h4").remove();
        $("h5").remove();
        $("p").remove();
        $("pre").remove();
    }

    verJSON() {
        this.borrarTodo();
        this.crearElemento("h3","Datos de "+this.ciudad, "footer"); 
        this.crearElemento("h4",this.success,"footer"); 
        this.crearElemento("h5","JSON","footer");         
        this.crearElemento("pre","","footer"); 
        this.crearElemento("h5","Datos","footer"); 
        this.crearElemento("p","","footer"); 
        this.cargarDatos();
    }
}

var meteoLeon = new Meteo("León");
var meteoSegovia = new Meteo("Segovia");
var meteoMadrid = new Meteo("Madrid");