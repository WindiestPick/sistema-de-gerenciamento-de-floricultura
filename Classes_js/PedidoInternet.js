import { Pedido } from "./Pedidos.js";

class PedidoInternet{
    constructor(id, dataPedido, status, arranjo, valorTotal, cliente){
        super(id, dataPedido, status, arranjo, valorTotal);
        this.cliente = cliente;
    }
}