import {Pessoa} from "./Pessoa.js"

export class Gerente extends Pessoa{
    constructor(id, nome, cpf, setor, salario, endereco, eGerente){
        super(id, nome, cpf, setor, salario, endereco);
        this.eGerente = eGerente;
    }
    cadastraFornecedor(menu){
        menu.innerHTML += "<li><a href='./cadastrarFornecedor.php?usuario=gerente'>Cadastar novo fornecedor</a></li><br><br>"
    }
    geraPedido(menu){
        menu.innerHTML += "<li><a href='./gerarPedido.php?usuario=gerente'>Fazer um novo pedido</a></li><br><br>";
    }
    cadastarCliente(menu){
        menu.innerHTML += "<li><a href='./cadastrarCliente.php?usuario=gerente'>Cadastar novo cliente</a></li><br><br>";
    }
    cadastarProduto(menu){
        menu.innerHTML += "<li><a href='./cadastrarProduto.php?usuario=gerente'>Cadastar novo produto</a></li><br><br>";
    }
    gerarRelatorio(){

    }
    cancelarEntregas(){

    }
    cadastraFuncionario(){
        menu.innerHTML += "<li><a href='./cadastrarFuncionario.php?usuario=<?php echo $tipo?>'>Cadastar novo Funcionario</a></li><br><br>";
    }
    direcionaEntrega(){
        
    }

}