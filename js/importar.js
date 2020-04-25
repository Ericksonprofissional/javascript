let importarPaciente = document.querySelector("#importar-paciente");

importarPaciente.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", () => {

        let pacientes = JSON.parse(xhr.responseText);
        pacientes.forEach(paciente => {
            adicionaPacienteTabela(paciente);
        });
    });
});