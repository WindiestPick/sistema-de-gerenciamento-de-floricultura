export class Cliente{
    constructor(id, nome, cpf, endereco, telefone){
        this.idCliente = id;
        this.nomeCliente = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    geraPedido(menu){
        menu.innerHTML += "<li><a href='./gerarPedido.html?usuario=cliente'>Fazer um novo pedido</a></li>";
    }
}