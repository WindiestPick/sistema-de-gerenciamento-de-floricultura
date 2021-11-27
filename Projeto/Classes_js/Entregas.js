class Entregas{
    constructor(funcionario, pedido, status){
        this.funcionario = funcionario;
        this.pedido = pedido;
        this._status = status;
    }
    get status(){
        return this._status;
    }
    set status(string){
        this._status = string;
    }
}