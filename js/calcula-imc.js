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

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.innerHTML = "Peso invalido";
        trPaciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.innerHTML = "Altura invalida";
        trPaciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.innerHTML = imc;
    }
}


function calculaImc(peso, altura){
    var imc =0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


titulo.addEventListener("click", msg);

function msg() {
var site = titulo.innerText;
   alert("Bem vindo ao site " + site);
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso) {
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if(altura > 0 && altura < 3){
        return true;
    }else{
        return false;
    }
}