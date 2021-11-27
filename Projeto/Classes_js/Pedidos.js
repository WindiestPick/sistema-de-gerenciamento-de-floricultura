
export class Pedido{
    constructor(id, dataPedido, status, arranjo, valorTotal){
        this.idPedido = id;
        this.dataPedido = dataPedido;
        this.status = status;
        this.arranjo = arranjo;
        this.valorTotal = valorTotal;
    }
    statusDoPedido(){
        return this.status;
    }
}