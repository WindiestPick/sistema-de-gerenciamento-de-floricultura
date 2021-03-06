import {Pessoa} from "./Pessoa.js"

export class Funcionario extends Pessoa{
    constructor(id, nome, cpf, setor, salario, endereco, comicao){
        super(id, nome, cpf, setor, salario, endereco);
        this._comicao = comicao;
    }
    get comicao(){
        return this._comicao;
    }
    set comicao(valor){
        this._comicao = valor;
    }
    cadastraFornecedor(menu){
        menu.innerHTML += "<li><a href='./cadastrarFornecedor.html?usuario=funcionario'>Cadastar novo fornecedor</a></li>"
    }
    geraPedido(menu){
        menu.innerHTML += "<li><a href='./gerarPedido.html?usuario=funcionario'>Fazer um novo pedido</a></li>";
    }
    cadastarCliente(menu){
        menu.innerHTML += "<li><a href='./cadastrarCliente.html?usuario=funcionario'>Cadastar novo cliente</a></li>";
    }
    cadastarProduto(menu){
        menu.innerHTML += "<li><a href='./cadastrarProduto.html?usuario=funcionario'>Cadastar novo produto</a></li>";
    }
}

