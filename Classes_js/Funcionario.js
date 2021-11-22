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
        menu.innerHTML += "<li><a href='./cadastrarFornecedor.php?usuario=funcionario'>Cadastar novo fornecedor</a></li><br><br>"
    }
    geraPedido(menu){
        menu.innerHTML += "<li><a href='./gerarPedido.php?usuario=funcionario'>Fazer um novo pedido</a></li><br><br>";
    }
    cadastarCliente(menu){
        menu.innerHTML += "<li><a href='./cadastrarCliente.php?usuario=funcionario'>Cadastar novo cliente</a></li><br><br>";
    }
    cadastarProduto(menu){
        menu.innerHTML += "<li><a href='./cadastrarProduto.php?usuario=funcionario'>Cadastar novo produto</a></li><br><br>";
    }
}

