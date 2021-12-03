export class Pedido{
    constructor(id, idProduto, idCliente, valorTotal){
        this.idPedido = id;
        this.idProduto = idProduto;
        this.idCliente = idCliente;
        this.valorTotal = valorTotal;
    }
    set status(texto){
        this._status=texto;
    }
    get status(){
        return this.status
    }
}