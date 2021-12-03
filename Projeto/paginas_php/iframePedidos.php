<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lotus Floricultura</title>
    <link rel="stylesheet" type="text/css" href="../scipts_css/Geral.css">
    <script type="module" src="../paginas_js/iframePedidos.js"></script>
    <?php
        include_once("../connect.php");
        $sql = "SELECT * FROM pedidos";
        $result = $conn->query($sql);
    ?>
</head>
<body>
    <p hidden id="objeto">
    <?php 
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            //id, valor, quantidade, nome, fornecedor
            echo $row["idPedido"] . "," . $row["idProduto"] . "," . $row["idCliente"] . "," . $row["valorPedido"] . "|";
        }
    }
    $conn->close();
    ?></p>
    <p id="mostra_pedidos"></p>
</body>
</html>
</html>