var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(() => {
        event.target.parentNode.remove();
        alert("Paciente " + tabela.querySelector(".info-nome").textContent + " foi removido");
    }, 1100)

});