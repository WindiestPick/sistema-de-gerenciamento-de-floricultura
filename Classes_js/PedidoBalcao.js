import { Pedido } from "./Pedidos.js";

class PedidoBalcao{
    constructor(id, dataPedido, status, arranjo, valorTotal, nome){
        super(id, dataPedido, status, arranjo, valorTotal);
        this.nomeCliente = nome;
    }
}