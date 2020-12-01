"use strict";

class Stack {
    constructor() {
        this.stack = new Array();
    }

    queue(valor) {
        this.stack.push(valor);
    }

    dequeue() {
        return this.stack.pop();
    }

    show() {
        var str = "<ul>";
        for (var i in this.stack) {
            str += "<li>"+this.stack[i]+"</li>"
        }
        str += "</ul>";
        return str;
    }
}

class CalculadoraRPN {
    constructor() {
        this.pantalla = 0;
        this.stack = new Stack();
    }

    digitos(digito) {
        this.pantalla += digito;
        document.getElementById("screen").value = this.pantalla;
    }

    punto() {
        this.pantalla += '.';
        document.getElementById("screen").value = this.pantalla;
    }

    borrar() {
        this.pantalla = '';
        document.getElementById("screen").value = this.pantalla;
    }

    enter() {
        this.stack.queue(this.pantalla);
        document.getElementById("pila").innerHTML = this.stack.show();
        this.borrar();
    }

    suma() {
        var valor1 = parseFloat(this.stack.dequeue());
        var valor2 = parseFloat(this.stack.dequeue());
        this.stack.queue(valor1+valor2);
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    resta() {
        var valor1 = parseFloat(this.stack.dequeue());
        var valor2 = parseFloat(this.stack.dequeue());
        this.stack.queue(valor2-valor1);
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    multiplicación() {
        var valor1 = parseFloat(this.stack.dequeue());
        var valor2 = parseFloat(this.stack.dequeue());
        this.stack.queue(valor1*valor2);
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    división() {
        var valor1 = parseFloat(this.stack.dequeue());
        var valor2 = parseFloat(this.stack.dequeue());
        this.stack.queue(valor2/valor1);
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    cuadrado() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.pow(valor, 2));
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    seno() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.sin(valor));
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    coseno() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.cos(valor));
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    tangente() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.tan(valor));
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    raiz() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.sqrt(valor));
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    arcsin() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.asin(valor));
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    arcos() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.acos(valor));
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    arctan() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.atan(valor));
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    logaritmo() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.log10(valor));
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    neperiano() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.log(valor));
        document.getElementById("pila").innerHTML = this.stack.show();
    }

    exponente() {
        var valor = parseFloat(this.stack.dequeue());
        this.stack.queue(Math.exp(valor));
        document.getElementById("pila").innerHTML = this.stack.show();
    }
}

var calculadora = new CalculadoraRPN();
