<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lotus Floricultura</title>
    <link rel="stylesheet" type="text/css" href="../scipts_css/Geral.css">
    <script type="module" src="../paginas_js/cadastros.js"></script>
    <?php
        include_once("../connect.php");

        $tipo = $_GET["usuario"];
    ?>
</head>
<body>

    <header>
        <h2>Bem vindo a Lotus Floricultura</h2>
    </header>
        
    <section>
        <nav>
            <ul id="menu">

            </ul>
        </nav>
          
    <article>
        <form action="../paginas_php/produto.php" method="get">
            <label>Digite o id do produto:</label>
            <input type="text" name="idpro"><br><br>
            <label>Digite o id do fornecedor:</label>
            <input type="text" name="idfor"><br><br>
            <label>Digite o nome do produto:</label>
            <input type="text" name="nome"><br><br>
            <label>Digite o preço do produto:</label>
            <input type="text" name="preco"><br><br>
            <label>Estoque do produto:</label>
            <input type="text" name="estoque"><br>
            <input type="submit" value="Cadastrar">
        </form>
    </article>
    </section>
        
    <footer>
        <h3 id="acesso"> Você logou como <?php echo $tipo?></h3>
    </footer>
        
</body>
</html>
</html>