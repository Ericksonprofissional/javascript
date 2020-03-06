var adicionar = document.querySelector("#adicionar-paciente");

adicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var pacienteForm = obtemInformacoesForm(form);
    console.log(pacienteForm)

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = pacienteForm.nome;
    pesoTd.textContent = pacienteForm.peso;
    alturaTd.textContent = pacienteForm.altura;
    gorduraTd.textContent = pacienteForm.gordura;
    imcTd.textContent = calculaImc(pacienteForm.peso, pacienteForm.altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tablePaciente = document.querySelector("#tabela-pacientes");
    
    tablePaciente.appendChild(pacienteTr);

});


function obtemInformacoesForm(form) {
  
    return paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value

    }
}