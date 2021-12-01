# Sistema de Informatização de Floriculturas
---
### Informações do criador:
* Autor: Gustavo Henrique Malaquias da Silva Paula
* Idade: 21
* País: Brasil
* Estado: Acre
* Curso: Sistemas de Informação
---

<br>
<br>
<br>

## Objetivo Geral

### Objetivos do Sistema
1. Possibilitar o cadastro de vendas (que incluem as vendas realizadas no próprio
balcão da floricultura, as vendas por telefone ou as vendas pela Internet)
2. Possibilitar também o cadastro de produtos, fornecedores, clientes, convênios,
funcionários e arranjos e fornecer ao gerente, relatórios como: de clientes
devedores, de clientes aniversariantes, de produtos por fornecedor, de produtos
Em estoque, de entregas por funcionário e de entregas por determinado período.
3. O gerente pode controlar as entregas, distribuindo-as aos funcionários para que
sejam realizadas e atribuir as comissões devidas aos mesmos, bem como
cancelá-las quando solicitado.

### Objetivo do Criador
1. Desenvolver habilidades de programação para web e colocar em pratica os conhecimentos de 
JavaScript, html, PHP e Banco de dados (no caso o MySQL).
2. Criar um sistema funcional próximo do que eu considero um sistema real.
3. Desenvolver um sistema com as especificações exigidas pelo professor do curso.
---

<br>
<br>
<br>

## Casos de uso:
![image](https://user-images.githubusercontent.com/83839805/144251088-b8be1604-583f-4585-8291-d1dfcb05f225.png)

> No acasos de uso o Funcionário tem acesso as funcionalidades de cadastrar um produto, fornecedor ou um cliente, 
> fazer um pedido ou fazer uma entrega, como pedido pelo professor o usuário gerente alem das funcionálidades de um
> funcionário normal ainda tem a posibilidade de gerar relatorios de clientes devedores, de clientes aniversariantes, 
> de produtos por fornecedor, de produtos em estoque, de entregas por funcionário e de entregas por determinado período.
> Já o usuário Cliente só tem a posibilidade de gerar um pedido.
---

<br>
<br>

## Diagramas de Classe:
![image](https://user-images.githubusercontent.com/83839805/144252911-c1a6e40c-1df0-4555-9fc4-83859117c9ff.png)

> Com o diagrama de classe podemos ver mais detalhadamente as funçoes do sistema, alem das classes, fornecedores,
> produtos, clientes, pedidos, entregas, e pessoas, que são responsaveis por criar um objeto de cada tipo, ainda temos
> uma classe relatórios que é responsavel por organizar e montar os relatorios solicitados pelo gerente.
---

<br>
<br>

## Diagramas de Entidade e Relacionamento
![image](https://user-images.githubusercontent.com/83839805/144255483-20035cb4-6253-45c0-8fe9-8dc5bf8f89e2.png)

> Como foi usado Banco de dados para persistir os dados do sistema se faz necessário um diagrama par explicar as
> suas tabelas, que são:
>   * Fornecedor: armazenar os dados de cadastro do fornecedor
>   * Produto: armazenar os dados do produto e o seu estoque
>   * Pedido: guardar as informaçoes dos pedidos
>   * Cliente: cadastrar os clientes
>   * Entrega: direcionar e consultar as entregas
>   * Funcionário: guardar as informaçoes dos funcionários
---

<br>
<br>







### Referencias Bibliograficas:
> w3scools - https://www.w3schools.com/ <br>
> PHP - https://www.php.net/ <br>
> Refactoring Guru - https://refactoring.guru/ <br>
