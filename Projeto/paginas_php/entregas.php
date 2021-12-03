<?php
include_once("../connect.php");
$idped = $_GET["idPedido"];
$idfunc = $_GET["idFuncionario"];

$sql = "INSERT INTO entrega (idFuncionario, idPedido) VALUES ($idfunc,$idped)";

if (mysqli_query($conn, $sql)) {
    $status = "Nova entrega foi criada";
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
    <div style="text-align: center;">
        <script>
            alert("<?php echo $status;?>");
            window.history.back();
        </script>
    </div>
</body>
</html>