<?php
include_once("../connect.php");

$idpro = $_GET["idpro"];
$idcli = $_GET["idcli"];


//$result = $conn->query($sql);


//$preco = $_GET["preco"];

//$sql = "INSERT INTO pedidos (idPedido, idProduto, idCliente, valorPedido) VALUES (, $idpro, $idcli, $valor)";

//if (mysqli_query($conn, $sql)) {
//    $status = "Novo Produto Cadastrado com Sucesso";
//  } else {
//    $status = "Error: " . $sql . "<br>" . mysqli_error($conn);
//  }
//mysqli_close($conn);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lotus Floricultura</title>
    <script></script>
</head>
<body>
    <p><?php echo $idpro?></p>
    <div style="text-align: center;">
        <script>
            //alert("<?php //echo $status;?>");
            //window.history.back();
        </script>
    </div>
</body>
</html>