# Sistema de Informatização de Floriculturas
---
### Informações do criador:
* Autor: Gustavo Henrique Malaquias da Silva Paula
* Idade: 21
* País: Brasil
* Estado: Acre
* Curso: Sistemas de Informação

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

<br>
<br>
<br>

## Diagramas

<br>

### Casos de uso:
![Gustavo-TrabalhoED CDU](https://user-images.githubusercontent.com/83839805/144426843-ab7b5794-2d4c-45b3-a138-e46ffe1f8690.png)

> No acasos de uso o Funcionário tem acesso as funcionalidades de cadastrar um produto, fornecedor ou um cliente, 
> fazer um pedido ou fazer uma entrega, como pedido pelo professor o usuário gerente alem das funcionálidades de um
> funcionário normal ainda tem a posibilidade de gerar relatorios de clientes devedores, de clientes aniversariantes, 
> de produtos por fornecedor, de produtos em estoque, de entregas por funcionário e de entregas por determinado período.
> Já o usuário Cliente só tem a posibilidade de gerar um pedido.

<br>
<br>

### Diagramas de Classe:
![Gustavo-TrablahoED ClassD](https://user-images.githubusercontent.com/83839805/144426503-ca3fc2d5-7def-419d-9c9b-4fbcd82b44c8.png)

> Com o diagrama de classe podemos ver mais detalhadamente as funçoes do sistema, alem das classes, fornecedores,
> produtos, clientes, pedidos, entregas, e pessoas, que são responsaveis por criar um objeto de cada tipo, ainda temos
> uma classe relatórios que é responsavel por organizar e montar os relatorios solicitados pelo gerente.

<br>
<br>

### Diagramas de Entidade e Relacionamento
![Gustavo-Trabalho do ED DB](https://user-images.githubusercontent.com/83839805/144426542-a925bd60-4ef4-4f06-a562-b1719d4c10d6.png)

> Como foi usado Banco de dados para persistir os dados do sistema se faz necessário um diagrama par explicar as
> suas tabelas, que são:
>   * Fornecedor: armazenar os dados de cadastro do fornecedor
>   * Produto: armazenar os dados do produto e o seu estoque
>   * Pedido: guardar as informaçoes dos pedidos
>   * Cliente: cadastrar os clientes
>   * Entrega: direcionar e consultar as entregas
>   * Funcionário: guardar as informaçoes dos funcionários

<br>
<br>

# Telas em Funcionamento

### Como entrar no sistema:

![Lotus Floricultura - Pessoal — Microsoft_ Edge 2021-12-02 21-49-37](https://user-images.githubusercontent.com/83839805/144546243-2fc52077-17fe-4b82-83f5-c6836dc537ca.gif)

### Como cadastrar um fornecedor:

![Lotus Floricultura - Pessoal — Microsoft_ Edge 2021-12-02 21-51-31](https://user-images.githubusercontent.com/83839805/144546432-75b62bea-b520-4fb8-8d36-51474aec5e99.gif)

### Como cadastar um cliente

![Lotus Floricultura - Pessoal — Microsoft_ Edge 2021-12-02 21-52-04](https://user-images.githubusercontent.com/83839805/144546496-54daef7c-d2af-4f65-9f89-5f46f507f3bb.gif)

### Como cadastar um produto:

![Lotus Floricultura - Pessoal — Microsoft_ Edge 2021-12-02 21-52-40](https://user-images.githubusercontent.com/83839805/144546603-f06210ff-a253-40e9-862b-d5d0e9471f18.gif)

### Como fazer um pedido:

![Lotus Floricultura - Pessoal — Microsoft_ Edge 2021-12-02 21-53-12](https://user-images.githubusercontent.com/83839805/144546729-516249d3-ff4d-4e2b-921e-5daab04637d9.gif)

### Como cadastar um funcionário:

![Lotus Floricultura - Pessoal — Microsoft_ Edge 2021-12-02 22-01-13](https://user-images.githubusercontent.com/83839805/144546816-ed284112-4d7c-4d34-bd2d-64e41bdc322a.gif)

### Como definir uma entrega a um funcionário:

![Lotus Floricultura - Pessoal — Microsoft_ Edge 2021-12-02 23-14-04](https://user-images.githubusercontent.com/83839805/144546959-9f31a17a-07f7-437f-9b49-b54c50750cf5.gif)

### Como cancelar uma entrega:

![Lotus Floricultura - Pessoal — Microsoft_ Edge 2021-12-02 23-14-37](https://user-images.githubusercontent.com/83839805/144546982-58c13b91-3e56-461a-9ef6-37588750a342.gif)

<br>
<br>

## Referencias Bibliograficas:
> w3scools - https://www.w3schools.com/ <br>
> PHP - https://www.php.net/ <br>
> Refactoring Guru - https://refactoring.guru/ <br>
