import {Entregas} from "../Classes_js/Entregas.js"

let objeto = document.getElementById("objeto");
objeto = objeto.innerText.split("|");


for(let i = 0; i < objeto.length - 1; i++){
    let mostra = document.getElementById("mostra_entregas");
    let cria = objeto[i];
    cria = cria.split(",");
    let entregas = new Entregas(cria[1], cria[0]);
    mostra.innerHTML += "Id do pedido: " + entregas.pedido + " | Id do funcionario: " + entregas.funcionario + 
    "<br>__________________________________________________________________________________________<br>";

}