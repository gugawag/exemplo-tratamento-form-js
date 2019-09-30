var botao = document.querySelector("#btEnviar");

botao.addEventListener("click", function (evento) {
    var idade = document.querySelector("#idade").value;
    evento.preventDefault();
    if (idade >= 18) {
        alert("Tudo certo!");
    } else {
        alert("Mermão!! Q tá fazendo aqui? Vaza");
    }
});
