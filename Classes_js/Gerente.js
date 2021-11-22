import {Pessoa} from "./Pessoa.js"

export class Gerente extends Pessoa{
    constructor(id, nome, cpf, setor, salario, endereco, eGerente){
        super(id, nome, cpf, setor, salario, endereco);
        this.eGerente = eGerente;
    }
    gerarRelatorio(){

    }
    cancelarEntregas(){

    }
    cadastraFuncionario(){
        menu.innerHTML += "<li><a href='./cadastrarFuncionario.php'>Cadastar novo Funcionario</a></li><br><br>";
    }
    direcionaEntrega(){
        
    }

}