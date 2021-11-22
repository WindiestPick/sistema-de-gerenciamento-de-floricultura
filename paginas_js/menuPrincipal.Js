import {Funcionario} from "../Classes_js/Funcionario.js"
import {Gerente} from "../Classes_js/Gerente.js"
import {Cliente} from "../Classes_js/Cliente.js"

let texto = document.getElementById("text");


function criaFuncionario(){
    let funcionario = new Funcionario(1, "Gustavo Henrique", 445554455, "logista", 1500.00);    
    texto.innerHTML = `Código: ${funcionario.idFuncionario}<br>
    Funcionário: ${funcionario.nomeFuncionario}<br>
    CPF: ${funcionario.cpfFuncionario}<br>
    Setor: ${funcionario.setor} 
    `;
    let menu = document.getElementById("menu");
    funcionario.cadastraFornecedor(menu);
    funcionario.cadastarCliente(menu);
    funcionario.cadastarProduto(menu);
    funcionario.geraPedido(menu);
}

function criaGerente(){
    let gerente = new Gerente(1, "Gustavo Henrique", 454654655, "Gerente Geral", 1800.00);
    texto.innerHTML = `Código: ${gerente.idFuncionario}<br>
    Funcionário: ${gerente.nomeFuncionario}<br>
    CPF: ${gerente.cpfFuncionario}<br>
    Setor: ${gerente.setor}
    Gerente: Sim
    `
}

function criaCliente(){
    let cliente = new Cliente(1, "Jose Martins", 2313213)
    texto.innerHTML = `Código: ${cliente.idCliente}<br>
    Cliente: ${cliente.nomeCliente}<br>
    CPF: ${cliente.cpf}<br>
    `
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
