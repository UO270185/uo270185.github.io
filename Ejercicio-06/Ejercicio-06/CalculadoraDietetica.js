"use strict";

class CalculadoraDietética {
    constructor() {
        this.valores = new Map();
        this.valores.set("aceite", 884);
        this.valores.set("ajo", 100);
        this.valores.set("almejas", 78);
        this.valores.set("almendras", 480);
        this.valores.set("arroz", 360);
        this.valores.set("atun", 180);
        this.valores.set("avellanas", 540);
        this.valores.set("azucar", 400);
        this.valores.set("bacalao", 75);
        this.valores.set("berenjena", 27);
        this.valores.set("cacao", 590);
        this.valores.set("calabaza", 15);
        this.valores.set("calamares", 80);
        this.valores.set("cerdo", 360);
        this.valores.set("vaca", 200);
        this.valores.set("cerezas", 60);
        this.valores.set("cerveza", 30);
        this.valores.set("coco", 300);
        this.valores.set("coliflor", 30);
        this.valores.set("espinacas", 25);
        this.valores.set("fresas", 40);
        this.valores.set("galletas", 380);
        this.valores.set("gambas", 100);
        this.valores.set("garbanzos", 360);
        this.valores.set("harina", 360);
        this.valores.set("huevo", 160);
        this.valores.set("judias", 330);
        this.valores.set("leche", 65);
        this.valores.set("lechuga", 16);
        this.valores.set("lentejas", 320);
        this.valores.set("limon", 35);
        this.valores.set("mandarina", 43);
        this.valores.set("mantequilla", 720);
        this.valores.set("manzana", 55);
        this.valores.set("melocoton", 55);
        this.valores.set("merluza", 80);
        this.valores.set("mermelada", 300);
        this.valores.set("miel", 300);
        this.valores.set("naranja", 42);
        this.valores.set("nueces", 600);
        this.valores.set("pan", 280);
        this.valores.set("pasta", 360);
        this.valores.set("patatas", 85);
        this.valores.set("pepino", 13);
        this.valores.set("pera", 60);
        this.valores.set("platano", 100);
        this.valores.set("pimiento", 30);
        this.valores.set("pollo", 200);
        this.valores.set("puerro", 50);
        this.valores.set("queso", 310);
        this.valores.set("repollo", 25);
        this.valores.set("sardinas", 160);
        this.valores.set("sidra", 41);
        this.valores.set("tomate", 20);
        this.valores.set("uvas", 65);
        this.valores.set("vino", 77);
        this.valores.set("zanahoria", 40);

        this.deportes = new Map();
        this.deportes.set("dormir", 0.018);
        this.deportes.set("comer", 0.030);
        this.deportes.set("escaleras", 0.254);
        this.deportes.set("conducir", 0.043);
        this.deportes.set("pasear", 0.038);
        this.deportes.set("correr", 0.151);
        this.deportes.set("bailar", 0.90);
        this.deportes.set("tenis", 0.109);
        this.deportes.set("futbol", 0.137);
        this.deportes.set("pingpong", 0.056);
        this.deportes.set("golf", 0.080);
        this.deportes.set("baloncesto", 0.140);
        this.deportes.set("volleyball", 0.120);
        this.deportes.set("montañismo", 0.147);
        this.deportes.set("nadar", 0.173);
        this.deportes.set("esquiar", 0.152);
        this.deportes.set("remar", 0.090);
        this.deportes.set("caballo", 0.107);
    }

    calcularIMC() {
        var peso, altura, texto;
        peso = document.getElementById("peso").value;
        altura = document.getElementById("talla").value;

        if (isNaN(peso) || peso<=0 || isNaN(altura) || peso<=0){
            texto = "Entrada no válida";
            document.getElementById("resultado").innerHTML = texto;
        }
        else {
            texto = peso/(Math.pow(altura, 2));
            document.getElementById("resultado").innerHTML = "Tu IMC es de "+texto+".";

            if (parseFloat(texto) < 18.5){
                document.getElementById("aclaracion").innerHTML = "Peso insuficiente.";
            } else if (parseFloat(texto) < 24.9){
                document.getElementById("aclaracion").innerHTML = "Peso normal.";
            } else if (parseFloat(texto) < 29.9) {
                document.getElementById("aclaracion").innerHTML = "Sobrepeso.";
            } else {
                document.getElementById("aclaracion").innerHTML = "Obesidad.";
            }
        }
    }

    calcularDieta() {
        var texto;

        var num1 = document.getElementById("cantidad1").value;
        var num2 = document.getElementById("cantidad2").value;
        var num3 = document.getElementById("cantidad3").value;
        var num4 = document.getElementById("cantidad4").value;
        var num5 = document.getElementById("cantidad5").value;

        if (isNaN(num1) || num1<0 || isNaN(num2) || num2<0 || isNaN(num3) || num3<0 || isNaN(num4) || num4<0 || isNaN(num5) || num5<0 ){
            texto = "Entrada no válida";
            document.getElementById("resultado").innerHTML = texto;
        }
        else {
            var ing1 = document.getElementById("ingrediente1").value;
            var ing2 = document.getElementById("ingrediente2").value;
            var ing3 = document.getElementById("ingrediente3").value;
            var ing4 = document.getElementById("ingrediente4").value;
            var ing5 = document.getElementById("ingrediente5").value;

            var cal1 = (this.valores.get(ing1)/100) * num1;
            var cal2 = (this.valores.get(ing2)/100) * num2;
            var cal3 = (this.valores.get(ing3)/100) * num3;
            var cal4 = (this.valores.get(ing4)/100) * num4;
            var cal5 = (this.valores.get(ing5)/100) * num5;

            var ans = cal1+cal2+cal3+cal4+cal5;
            document.getElementById("resultado").innerHTML = "Has consumido "+ans+" kcal.";
        }
    }

    calcularEnergia() {
        var texto;

        var dep = document.getElementById("deporte").value;
        var num = document.getElementById("duracion").value;
        var cal = this.deportes.get(dep)*num;
        document.getElementById("resultado").innerHTML = "Has gastado "+cal+ " kcal.";
    }

}

var calculadora = new CalculadoraDietética();