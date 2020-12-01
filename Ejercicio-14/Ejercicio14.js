"use strict;"

class GeoMap {
    constructor() { }

    initialize(lati, long) {
        var centro = {lat: lati, lng: long};
        var mapaPosicion = new google.maps.Map(document.getElementById('mapa'), {zoom: 8, center: centro});
        var marcador = new google.maps.Marker({position:centro, map:mapaPosicion});
    }
}

class LectorArchivos {
    constructor() {
    }

    leerArchivo(files) {
        this.archivo = document.getElementById("archivo").files[0];
        this.nombre = document.getElementById("nombre");
        this.tamaño = document.getElementById("tamaño");
        this.tipo = document.getElementById("tipo");
        this.modif = document.getElementById("fechaModificado");
        this.contenido = document.getElementById("contenido");
        this.area = document.getElementById("areaTexto");
        this.error = document.getElementById("error");

        this.nombre.innerText = "Nombre del archivo: "+this.archivo.name;
        this.tamaño.innerText = "Tamaño del archivo: "+this.archivo.size+ " bytes";
        this.tipo.innerText = "Tipo del archivo: "+this.archivo.type;
        this.modif.innerText = "Fecha de la última modificación: "+this.archivo.lastModifiedDate;
        this.contenido.innerText = "Contenido del archivo: ";

        this.error.innerText = "";
        document.getElementById("inside").innerHTML = "";

        var temp = "<pre id=content></pre>";
        var tipoTexto = /text.*/;
        var tipoJSON = /json.*/;
        var tipoXML = /xml.*/;
        if (this.archivo.type.match(tipoTexto) || this.archivo.type.match(tipoJSON) || this.archivo.type.match(tipoXML) ) {
            var lector = new FileReader();
            lector.onload = function(evento) {
                var aux = "#content";
                $(aux).text(lector.result);
            } 
            lector.readAsText(this.archivo);
            document.getElementById("inside").innerHTML = temp;
        }
        else {
            this.error.innerText = "Error: archivo no válido";
        }
    }
}

class FullScreen {
    constructor() {

    }

    makeFull() {
            var elem = document.getElementById('fullscreen');
			
			var sBrowser, sUsrAg = navigator.userAgent;
			if (sUsrAg.indexOf("Firefox") > -1) {
				if (document.mozFullScreenElement) {
					document.mozCancelFullScreen();
				}
				else {
					elem.mozRequestFullScreen();
				}
			}
			else {
				if (document.webkitFullscreenElement){
					document.webkitCancelFullScreen();
				}
				else {
					elem.webkitRequestFullScreen();
				}
			}
    }
}

if (window.File && window.FileReader && window.FileList && window.Blob){
    document.write("<p>Este navegador soporta el API File</p>");
}
else {
    document.write("<p>Este navegador no soporta el API File, por lo que este programa no puede funcionar correctamente</p>");
}

var map = new GeoMap();
var filereader = new LectorArchivos();
var fullscreen = new FullScreen();