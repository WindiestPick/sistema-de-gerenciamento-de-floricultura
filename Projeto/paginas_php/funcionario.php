<?php
include_once("../connect.php");
$id = $_GET["id"];
$cpf = $_GET["cpf"];
$setor = $_GET["setor"];
$nome = strval($_GET["nome"]);
$gerente = $_GET["gerente"];
$endereco = $_GET["end"];
$salario = $_GET["salario"];


$sql = "INSERT INTO funcionario (idFuncionario, nome, cpf, setor, salario, endereco, eGerente) 
VALUES ($id,'$nome',$cpf, '$setor', $salario,'$endereco',$gerente)";


if (mysqli_query($conn, $sql)) {
    $status = "Novo Funcionario cadastrado com sucesso";
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