"use strict";

class Calculadora {
    constructor() {
        this.pantalla = "";
        this.memoria = 0;
    }

    digitos(digito) {
        this.pantalla += digito;
        document.getElementById("screen").value = this.pantalla;
    }

    punto() {
        this.pantalla += '.';
        document.getElementById("screen").value = this.pantalla;
    }

    suma() {
        this.pantalla += '+';
        document.getElementById("screen").value = this.pantalla;
    }

    resta() {
        this.pantalla += '-';
        document.getElementById("screen").value = this.pantalla;
    }

    multiplicación() {
        this.pantalla += '*';
        document.getElementById("screen").value = this.pantalla;
    }

    división() {
        this.pantalla += '/';
        document.getElementById("screen").value = this.pantalla;
    }

    mrc() {
        this.pantalla = this.memoria;
        document.getElementById("screen").value = this.pantalla;
    }

    mMenos() {
        try {
            this.memoria = eval(this.memoria - this.pantalla);
        } catch (err) {
            this.pantalla = "Error " + err;
        }
    }

    mMas() {
        try {
            this.memoria = eval(this.memoria + this.pantalla);
        } catch (err) {
            this.pantalla = "Error " + err;
        }
    }

    borrar() {
        this.pantalla = '';
        document.getElementById("screen").value = this.pantalla;
    }

    igual() {
        var str = this.pantalla;
        try {
        this.pantalla = eval(str);
        } catch (err) {
            this.pantalla = "Error " + err;
        }
        document.getElementById("screen").value = this.pantalla;
    }
}

class CalculadoraCientifica extends Calculadora {
    constructor() {
        super();
    }

    cuadrado() {
        var str = this.pantalla;
        this.pantalla = Math.pow(str, 2);
        document.getElementById("screen").value = this.pantalla;
    }

    seno() {
        var str = this.pantalla;
        this.pantalla = Math.sin(str);
        document.getElementById("screen").value = this.pantalla;
    }

    coseno() {
        var str = this.pantalla;
        this.pantalla = Math.cos(str);
        document.getElementById("screen").value = this.pantalla;
    }

    tangente() {
        var str = this.pantalla;
        this.pantalla = Math.tan(str);
        document.getElementById("screen").value = this.pantalla;
    }

    raiz() {
        var str = this.pantalla;
        this.pantalla = Math.sqrt(str);
        document.getElementById("screen").value = this.pantalla;
    }

    arcsin() {
        var str = this.pantalla;
        this.pantalla = Math.asin(str);
        document.getElementById("screen").value = this.pantalla;
    }

    arcos() {
        var str = this.pantalla;
        this.pantalla = Math.acos(str);
        document.getElementById("screen").value = this.pantalla;
    }

    arctan() {
        var str = this.pantalla;
        this.pantalla = Math.atan(str);
        document.getElementById("screen").value = this.pantalla;
    }

    logaritmo() {
        var str = this.pantalla;
        this.pantalla = Math.log10(str);
        document.getElementById("screen").value = this.pantalla;
    }

    neperiano() {
        var str = this.pantalla;
        this.pantalla = Math.log(str);
        document.getElementById("screen").value = this.pantalla;
    }

    exponente() {
        var str = this.pantalla;
        this.pantalla = Math.exp(str);
        document.getElementById("screen").value = this.pantalla;
    }

    pi() {
        this.digitos(Math.PI);
    }

    parentesis_izq() {
        this.pantalla += '(';
        document.getElementById("screen").value = this.pantalla;
    }

    parentesis_der() {
        this.pantalla += ')';
        document.getElementById("screen").value = this.pantalla;
    }
}

var calculadora = new CalculadoraCientifica();

