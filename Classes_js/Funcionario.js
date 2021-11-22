import {Pessoa} from "./Pessoa.js"

export class Funcionario extends Pessoa{
    constructor(id, nome, cpf, setor, salario, endereco, comicao){
        super(id, nome, cpf, setor, salario, endereco);
        this._comicao = comicao;
    }
    get comicao(){
        return this._comicao;
    }
    set comicao(valor){
        this._comicao = valor;
    }
}

