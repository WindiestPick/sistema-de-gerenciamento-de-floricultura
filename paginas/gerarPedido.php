<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lotus Floricultura</title>
    <link rel="stylesheet" type="text/css" href="../scipts_css/Geral.css">
    <script type="module" src="../paginas_js/gerarPedido.js"></script>
    <?php
        include_once("../connect.php");

        $tipo = $_GET["usuario"];
        $sql = "SELECT * FROM produtos";
        $result = $conn->query($sql);
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
        <p> <?php 
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
              echo "id do Produto: " . $row["idProduto"]. " - Name: " . " " . $row["nomeProduto"]. " " . $row["nomeProduto"] . " " . $row["valor"] . " " . $row["estoque"] ."<br>";
            }
          } else {
            echo "0 results";
          }
          $conn->close();
        ?> </p>

        <form action="../paginas_php/produto.php" method="get">
            <label>Digite o id do cliente:</label>
            <input type="text" name="idcli"><br><br>
            <label>Digite o id do Produto:</label>
            <input type="text" name="idpro">
            <p id="produtos"></p>
            <input type="button" value="+" id="botao"><br><br>
            <input type="submit" value="Fazer pedido">
        </form>
    </article>
    </section>
        
    <footer>
        <h3 id="acesso"> Você logou como <?php echo $tipo?></h3>
    </footer>
        
</body>
</html>
</html>