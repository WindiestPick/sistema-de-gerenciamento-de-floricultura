import {Produtos} from "../Classes_js/Produtos.js"

let objeto = document.getElementById("objeto");
objeto = objeto.innerText.split("|");
var produtos


for(let i = 0; i < objeto.length - 1; i++){
    let mostra = document.getElementById("mostra_produtos");
    let cria = objeto[i];
    cria = cria.split(",");
    produtos = new Produtos(cria[0], cria[1], cria[2], cria[3]);
    mostra.innerHTML += "Nome do produto: " + produtos.nomeProduto + " | Id do produto: " + produtos.idProduto + 
    " | Valor do produto: " + produtos.valorProduto + " | Estoque do produto: " + produtos.estoque + 
    "<br>__________________________________________________________________________________________<br>";

}