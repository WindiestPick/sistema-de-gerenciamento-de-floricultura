<?php
include_once("../connect.php");
$idcli = $_GET["idcli"];
$contador = $_GET["contador"];
$produtos = [];
 
for ($i = 0; $i < $contador; $i++){
    $idpro = $_GET["idpro" . $i + 1];
    $produtos[] = $idpro;
}
$valor = 0;
$total = 0;

for ($i = 0; $i < $contador; $i++){
    $sqlproduto = "SELECT * FROM produtos WHERE idProduto = $produtos[$i]";
    $resultPro = $conn->query($sqlproduto);

    if ($resultPro->num_rows > 0) {
        // output data of each row
        while($row = $resultPro->fetch_assoc()) {
            $valor += $row["valor"];
        }
    }
}


$todos_produtos = implode("+" , $produtos);


$sql = "INSERT INTO pedidos (idProduto, idCliente, valorPedido) VALUES ('$todos_produtos' ,$idcli, $valor)";


if (mysqli_query($conn, $sql)) {
    $status = "Novo Pedido foi feito";
  } else {
    $status = "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

mysqli_close($conn);
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
    <p><?php ?></p>
    <div style="text-align: center;">
        <script>
            alert("<?php echo $status;?>");
            window.history.back();
        </script>
    </div>
</body>
</html>