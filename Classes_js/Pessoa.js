export class Pessoa{
    constructor(id, nome, cpf, setor, salario, endereco){
        this.idFuncionario = id;
        this.nomeFuncionario = nome;
        this.cpfFuncionario = cpf;
        this.setor = setor;
        this.salario = salario;
        this.endereco = endereco;
    }
    cadastraFornecedor(menu){
        menu.innerHTML += "<li><a href='./cadastrarFornecedor.php'>Cadastar novo fornecedor</a></li><br><br>"
    }
    geraPedido(menu){
        menu.innerHTML += "<li><a href='./gerarPedido.php'>Fazer um novo pedido</a></li><br><br>";
    }
    cadastarCliente(menu){
        menu.innerHTML += "<li><a href='./cadastrarCliente.php'>Cadastar novo cliente</a></li><br><br>";
    }
    cadastarProduto(menu){
        menu.innerHTML += "<li><a href='./cadastrarProduto.php'>Cadastar novo produto</a></li><br><br>";
    }

}

