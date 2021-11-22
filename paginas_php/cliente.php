<?php
include_once("../connect.php");
$id = $_GET["id"];
$cpf = $_GET["cpf"];
$nascimento = $_GET["data"];
$nome = strval($_GET["nome"]);
$telefone = $_GET["telefone"];
$endereco = $_GET["end"];


$sql = "INSERT INTO cliente (idCliente, nome, cpf, endereco, telefone, dataNascimento) VALUES ($id,'$nome',$cpf,'$endereco',$telefone,'$nascimento')";

if (mysqli_query($conn, $sql)) {
    $status = "Novo cliente cadastrado com sucesso";
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