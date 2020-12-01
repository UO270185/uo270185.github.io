"use strict";

class Calculator {
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

var calculadora = new Calculator();