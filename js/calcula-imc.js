var titulo = document.querySelector(".titulo");
titulo.innerText = "Erickson Nutricionita";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    trPaciente = pacientes[i];

    var tdPeso = trPaciente.querySelector(".info-peso");
    var peso = tdPeso.innerHTML;

    var tdAltura = trPaciente.querySelector(".info-altura");
    var altura = tdAltura.innerHTML;

    var tdImc = trPaciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso < 1 || peso > 400) {
        pesoEhValido = false;
        tdImc.innerHTML = "Peso invalido";
        trPaciente.classList.add("paciente-invalido");
    }

    if (altura < 0.1 || altura > 3) {
        alturaEhValida = false;
        tdImc.innerHTML = "Altura invalida";
        trPaciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.innerHTML = imc;
    }
}


titulo.addEventListener("click", msg);

function msg() {
var site = titulo.innerText;
   alert("Bem vindo ao site " + site);
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}