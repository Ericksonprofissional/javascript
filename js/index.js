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
        var imc = peso / (altura * altura);
        tdImc.innerHTML = imc.toFixed(2);
    }
}


titulo.addEventListener("click", msg);

function msg() {
var site = titulo.innerText;
   alert("Bem vindo ao site " + site);
}

var adicionar = document.querySelector("#adicionar-paciente");

adicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    console.log(nome, peso, altura, gordura);

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tablePaciente = document.querySelector("#tabela-pacientes");
    console.log(tablePaciente);
    tablePaciente.appendChild(pacienteTr);

});