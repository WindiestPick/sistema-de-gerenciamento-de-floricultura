var botao = document.getElementById("botao");

function logar(){
    let usuario = document.getElementsByClassName("user");
    for(let i = 0;i<usuario.length;i++){
        if (usuario[i].checked) {
            botao.type = "submit";
            return ""
        }
    }
    alert("Selecione um tipo de usuario");
}

botao.onclick = logar;


