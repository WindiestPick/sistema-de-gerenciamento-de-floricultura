export class Produtos{
    constructor(id, valor, quantidade, nome, fornecedor){
        this.idProduto = id;
        this.valorProduto = valor;
        this.estoque = quantidade;
        this.nomeProduto = nome;
        this.fornecedor = fornecedor;
    }
}