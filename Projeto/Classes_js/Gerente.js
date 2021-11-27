import {Pessoa} from "./Pessoa.js"

export class Gerente extends Pessoa{
    constructor(id, nome, cpf, setor, salario, endereco, eGerente){
        super(id, nome, cpf, setor, salario, endereco);
        this.eGerente = eGerente;
    }
    cadastraFornecedor(menu){
        menu.innerHTML += "<li><a href='./cadastrarFornecedor.php?usuario=gerente'>Cadastar novo fornecedor</a></li>"
    }
    geraPedido(menu){
        menu.innerHTML += "<li><a href='./gerarPedido.php?usuario=gerente'>Fazer um novo pedido</a></li>";
    }
    cadastarCliente(menu){
        menu.innerHTML += "<li><a href='./cadastrarCliente.php?usuario=gerente'>Cadastar novo cliente</a></li>";
    }
    cadastarProduto(menu){
        menu.innerHTML += "<li><a href='./cadastrarProduto.php?usuario=gerente'>Cadastar novo produto</a></li>";
    }
    gerarRelatorio(){

    }
    cancelarEntregas(){

    }
    cadastraFuncionario(){
        menu.innerHTML += "<li><a href='./cadastrarFuncionario.php?usuario=<?php echo $tipo?>'>Cadastar novo Funcionario</a></li>";
    }
    direcionaEntrega(){
        
    }

}