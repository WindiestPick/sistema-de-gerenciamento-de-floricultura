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
        throw new Error("Implemente o Metodo abstrato");
    }
    geraPedido(menu){
        throw new Error("Implemente o Metodo abstrato");
    }
    cadastarCliente(menu){
        throw new Error("Implemente o Metodo abstrato");
    }
    cadastarProduto(menu){
        throw new Error("Implemente o Metodo abstrato");
    }

}

