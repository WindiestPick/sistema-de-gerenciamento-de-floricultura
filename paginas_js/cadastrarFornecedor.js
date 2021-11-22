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
}

function criaCliente(){
    let cliente = new Cliente(1, "Jose Martins", 2313213)
    let menu = document.getElementById("menu");
    cliente.geraPedido(menu);
}

let t = document.getElementById("acesso").innerHTML;
let separado = t.split(" ");

if (separado[4] == "funcionario"){
    criaFuncionario();
}else if(separado[4] == "gerente"){
    criaGerente();
}else{
    criaCliente();
}