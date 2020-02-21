var titulo = document.querySelector(".titulo");
titulo.innerText = "Erickson Nutricionita";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.innerHTML;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.innerHTML;

var imc = peso / (altura * altura);
var tdImc =  paciente.querySelector(".info-imc");
tdImc.innerHTML = imc;