
var botao = document.querySelector("#btEnviar");

botao.addEventListener("click", function(evento) {
    var idade = document.querySelector("#idade").value;
    evento.preventDefault();
    console.log(typeof idade)
    console.log(idade)
    if (idade >= 18) {
        console.log("ok");
    } else {
        alert("Mermão!! Q tá fazendo aqui? Vaza");
    }
});
