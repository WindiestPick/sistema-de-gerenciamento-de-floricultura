<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lotus Floricultura</title>
    <link rel="stylesheet" type="text/css" href="../scipts_css/Geral.css">
    <script type="module" src="../paginas_js/cadastrarFornecedor.js"></script>
        </head>
        <body>
        <header>
          <h2>Bem vindo a Lotus Floricultura</h2>
        </header>
        
        <section>
          <nav>
            <ul>
              <li><a href="#">Cadastar novo cliente</a></li><br><br>
              <li><a href="#">Cadastar novo produto</a></li><br><br>
              <li><a href="#">Criar um novo pedido</a></li><br><br>
            </ul>
          </nav>
          
          <article>
            <form action="../paginas_php/fornecedor.php" method="get">
                <label>Digite o id do fornecedor</label>
                <input type="text" name="id"><br><br>
                <label>Digite o cnpj do fornecedor</label>
                <input type="text" name="cnpj"><br><br>
                <label>Digite a data de cadastro do fornecedor</label>
                <input type="text" name="data"><br><br>
                <label>Digite o nome do fornecedor</label>
                <input type="text" name="nome"><br>
                <input type="submit" value="Cadastrar">
            </form>
          </article>
        </section>
        
        <footer>
          <h3>Você acessou como funcionario</h3>
        </footer>
        
        </body>
        </html>
</html>