<?php
include_once("../connect.php");
$id = $_GET["id"];
$cnpj = $_GET["cnpj"];
$data = $_GET["data"];
$nome = strval($_GET["nome"]);

$sql = "INSERT INTO fornecedor (idFornecedor, cnpj, dataCadastro, nomeFornecedor) VALUES ($id,$cnpj,'$data','$nome')";

if (mysqli_query($conn, $sql)) {
    $status = "Novo fornecedor Cadastrado com Sucesso";
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