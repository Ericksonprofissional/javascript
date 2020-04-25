let filtrando = document.querySelector("#filtro-tabela");

filtrando.addEventListener("input",(el)=>{
    let pesquisaNome = (el.target.value);
    let pacientes = document.querySelectorAll(".paciente");

    if(pesquisaNome.length > 0 ){
        pacientes.forEach(paciente => {
            let nomePaciente = paciente.querySelector(".info-nome").innerHTML;
            let expressao = new RegExp(pesquisaNome, "i")
            expressao.test(nomePaciente) ? paciente.classList.remove("invisivel") : paciente.classList.add("invisivel");
        });
    }else{
        pacientes.forEach(paciente => { 
            paciente.classList.remove("invisivel");
        });
    }
    
})