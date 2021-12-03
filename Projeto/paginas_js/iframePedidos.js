import {Pedido} from "../Classes_js/Pedidos.js"

let objeto = document.getElementById("objeto");
objeto = objeto.innerText.split("|");
var produtos


for(let i = 0; i < objeto.length - 1; i++){
    let mostra = document.getElementById("mostra_pedidos");
    let cria = objeto[i];
    cria = cria.split(",");
    let pedidos = new Pedido(cria[0], cria[1], cria[2], cria[3]);
    mostra.innerHTML += "Id do pedido: " + pedidos.idPedido + " | Id dos Produtos: " + pedidos.idProduto.split("+") + 
    " | Id do cliente: " + pedidos.idCliente + " | Valor total do pedido: " + pedidos.valorTotal + 
    "<br>__________________________________________________________________________________________<br>";

}