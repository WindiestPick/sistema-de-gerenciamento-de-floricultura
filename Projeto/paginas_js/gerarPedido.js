import {Funcionario} from "../Classes_js/Funcionario.js"
import {Gerente} from "../Classes_js/Gerente.js"
import {Cliente} from "../Classes_js/Cliente.js"


let texto = document.getElementById("text");


function criaFuncionario(){
    let funcionario = new Funcionario(1, "Gustavo Henrique", 445554455, "logista", 1500.00);    
    let menu = document.getElementById("menu");
    funcionario.cadastraFornecedor(menu);
    funcionario.cadastarCliente(menu);
    funcionario.cadastarProduto(menu);
    funcionario.geraPedido(menu);
}

function criaGerente(){
    let gerente = new Gerente(1, "Gustavo Henrique", 454654655, "Gerente Geral", 1800.00);
    let menu = document.getElementById("menu");
    gerente.cadastraFornecedor(menu);
    gerente.cadastarCliente(menu);
    gerente.cadastarProduto(menu);
    gerente.geraPedido(menu);
    gerente.cadastraFuncionario(menu);
    gerente.cancelarEntregas(menu);
    gerente.direcionaEntrega(menu);
    gerente.gerarRelatorio(menu);
}

function criaCliente(){
    let cliente = new Cliente(1, "Jose Martins", 2313213)
    let menu = document.getElementById("menu");
    cliente.geraPedido(menu);
}
let cont_input = 1;
let contador = document.getElementById("contador");
function novoProduto(){
    cont_input++
    let produtos = document.getElementById("produtos");
    produtos.innerHTML += "<label>Digite o id do Produto:</label> <input type='text' name='idpro"+ cont_input +"'> <br> <br>";
    contador.value = cont_input;
}


contador.value = cont_input;
let botao = document.getElementById("botao");
let url = window.location.href;
 
function parametrosUrl(url){
    let allParameters = url.split("?");
    allParameters.splice(0,1);
    let oneParameters = allParameters[0].split("=");
    oneParameters.splice(0,1);
    acesso.innerHTML = "Você entrou como " + oneParameters[0];
    return oneParameters[0];
}

let separado = parametrosUrl(url);

if (separado == "funcionario"){
    criaFuncionario();
}else if(separado == "gerente"){
    criaGerente();
}else{
    criaCliente();
}

botao.onclick = novoProduto;