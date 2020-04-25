var adicionar = document.querySelector("#adicionar-paciente");

adicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var pacienteForm = obtemInformacoesForm(form);
    console.log(pacienteForm);

    var erros = validaPaciente(pacienteForm);
    if (erros.length > 0) {
        exibeMensagensErros(erros);
        return;
    }
    adicionaPacienteTabela(pacienteForm);
    
    form.reset();

    document.querySelector(".mensagem-erro").innerHTML = "";
});

function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tablePaciente = document.querySelector("#tabela-pacientes");
    tablePaciente.appendChild(pacienteTr);
}


function obtemInformacoesForm(form) {

    return paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}


function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    paciente.nome.length < 3 ? erros.push("O nome deve ser preenchido") : console.log("nome preenchido");
    (!validaPeso(paciente.peso)) ? erros.push("O peso é invalido.") : console.log("peso preenchido");
    (!validaAltura(paciente.altura)) ? erros.push("A altura é invalido.") : console.log("altura preenchida");
    paciente.gordura.length < 2 ? erros.push("Gordura deve ser preenchido") : console.log("gordura preenchida");

    return erros;
}

function exibeMensagensErros(erros) {
    var ul = document.querySelector(".mensagem-erro");
    ul.innerHTML = "";
    erros.forEach((erro) => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}