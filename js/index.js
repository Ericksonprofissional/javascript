var titulo = document.querySelector(".titulo");
titulo.innerText = "Erickson Nutricionita";

var trPaciente = document.querySelector("#primeiro-paciente");
var tdPeso = trPaciente.querySelector(".info-peso");
var peso = tdPeso.innerHTML;

var tdAltura = trPaciente.querySelector(".info-altura");
var altura = tdAltura.innerHTML;

var tdImc =  trPaciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso < 1 || peso > 400){
    pesoEhValido = false;
    tdImc.innerHTML = "Peso invalido";
}

if(altura < 0.1 || altura > 3){
    alturaEhValida = false;
    tdImc.innerHTML = "Altura invalida";
}
if( alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.innerHTML = imc;
}

