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
    Setor: ${gerente.setor}<br>
    Gerente: Sim
    `;
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
    texto.innerHTML = `Código: ${cliente.idCliente}<br>
    Cliente: ${cliente.nomeCliente}<br>
    CPF: ${cliente.cpf}<br>
    `
    let menu = document.getElementById("menu");
    cliente.geraPedido(menu);
}

let url = window.location.href;

function parametrosUrl(url){
    let acesso = document.getElementById("acesso");
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
