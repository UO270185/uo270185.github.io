"use strict";

class Agenda {
    constructor() {
    }

    nuevaSeccion() {
        var nuevoTitulo="<h2>Otro año más</h2>";
        var nuevoParrafo="<p>Queda mucho.</p>";
        var nuevoSubtitulo=$("<h3></h3>").text("Cosas del futuro");

        $("#nuevo").append(nuevoTitulo);
        $("#nuevo").append(nuevoParrafo);
        $("#nuevo").append(nuevoSubtitulo);
    }

    eliminarBotones() {
        $("button").remove();
    }

    recorrerDom() {
        $("*", document.body).each(function() {       
            var parentTag = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode("Etiqueta padre: <"
            +parentTag+"> elemento: <"+$(this).get(0).tagName+"> valor: "));});
    }
}

class MiTabla {
    constructor() {}

    mostrar() {
        $("table").show();
    }
    ocultar() {
        $("table").hide();
    }
    cambiarBorde() {
        $("table").css({borderStyle: 'solid'});
    }
    invertirColor() {
        $("table").css({backgroundColor: 'plum', borderColor: 'rgb(181, 218, 253)'});
        $("td").css({backgroundColor: 'rgb(181, 218, 253)'});
    }
    vaciar() {
        $("td").remove();
    }

    sumarFilasColumnas() {
        var nFilas = $("table tr").length;
        var nColumnas = $("table tr:last td").length;
        var total = "<p>Filas: "+nFilas+" - Columnas: "+nColumnas+" - Total: "+(nFilas+nColumnas)+"</p>";
        $("table").after(total);
    }
}

class MiLista {
    constructor() {}

    mostrar() {
        $("ul").show();
    }
    ocultar() {
        $("ul").hide();
    }
    cambiarColor() {
        $("ul").css({backgroundColor: 'plum'});
    }
    quitarCursiva() {
        $("ul").css({fontStyle: 'normal'});
    }
    aclaracion() {
        $("ul").prepend("<p>No sé si los cumpliré</p>");
    }
}

class MiTitulo {
    constructor() {}

    mostrar() {
        $("h1").show();
    }
    ocultar() {
        $("h1").hide();
    }
    centrar() {
        $("h1").css({textAlign: 'center'});
    }
    traducir() {
        $("h1").text("Diary");
    }
}

class MiParrafo1 {
    constructor() {}

    mostrar() {
        $("#parrafo1").show();
    }
    ocultar() {
        $("#parrafo1").hide();
    }
    traducir() {
        $("#parrafo1").text("What a year!")
    }
    añadirTexto() {
        $("#parrafo1").after("<p>¡Que acabe ya!</p>");
    }
}

class MiParrafo2 {
    constructor() {}

    mostrar() {
        $("#parrafo2").show();
    }
    ocultar() {
        $("#parrafo2").hide();
    }
    traducir() {
        $("#parrafo2").text("It's coming...")
    }
}

var mitabla = new MiTabla();
var milista = new MiLista();
var mititulo = new MiTitulo();
var miparrafo1 = new MiParrafo1();
var miparrafo2 = new MiParrafo2();
var agenda = new Agenda();