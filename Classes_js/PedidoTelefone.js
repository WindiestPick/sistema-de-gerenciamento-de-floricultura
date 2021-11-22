import { Pedido } from "./Pedidos.js";

class PedidoTelefone{
    constructor(id, dataPedido, status, arranjo, valorTotal, cliente, telefone){
        super(id, dataPedido, status, arranjo, valorTotal);
        this.cliente = cliente;
        this.telefoneChamado = telefone;
    }
}