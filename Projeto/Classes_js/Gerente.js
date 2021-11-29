import {Pessoa} from "./Pessoa.js"

export class Gerente extends Pessoa{
    constructor(id, nome, cpf, setor, salario, endereco, eGerente){
        super(id, nome, cpf, setor, salario, endereco);
        this.eGerente = eGerente;
    }
    cadastraFornecedor(menu){
        menu.innerHTML += "<li><a href='./cadastrarFornecedor.html?usuario=gerente'>Cadastar novo fornecedor</a></li>"
    }
    geraPedido(menu){
        menu.innerHTML += "<li><a href='./gerarPedido.html?usuario=gerente'>Fazer um novo pedido</a></li>";
    }
    cadastarCliente(menu){
        menu.innerHTML += "<li><a href='./cadastrarCliente.html?usuario=gerente'>Cadastar novo cliente</a></li>";
    }
    cadastarProduto(menu){
        menu.innerHTML += "<li><a href='./cadastrarProduto.html?usuario=gerente'>Cadastar novo produto</a></li>";
    }
    gerarRelatorio(menu){
        menu.innerHTML += "<li><a href='./gerarRelatorio.html?usuario=gerente'>Relatorios</a></li>";
    }
    cancelarEntregas(menu){
        menu.innerHTML += "<li><a href='./cancelarEntregas.html?usuario=gerente'>Cancelar Entregas</a></li>";
    }
    cadastraFuncionario(menu){
        menu.innerHTML += "<li><a href='./cadastrarFuncionario.html?usuario=gerente'>Cadastar novo Funcionario</a></li>";
    }
    direcionaEntrega(menu){
        menu.innerHTML += "<li><a href='./direcionarEntregas.html?usuario=gerente'>Direcionar Entregas</a></li>";
    }

}