<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lotus Floricultura</title>
    <link rel="stylesheet" type="text/css" href="../scipts_css/Geral.css">
    <script type="module" src="../paginas_js/menuPrincipal.Js"></script>
    <?php
        include_once("../connect.php");

        $tipo = $_GET["usuario"];

        $criar = "<script>if('". $tipo ."' == 'gerente'){ 
          criaGerente();
        }else if('". $tipo ."'=='funcionario'){
          criaFuncionario();
        }else{
          criaGerente();
        }</script>";
    ?>

        </head>
        <body>
        <header>
          <h2>Bem vindo a Lotus Floricultura </h2>
        </header>
        <section>
          <nav>
            <ul id="menu">
              
            </ul>
          </nav>
          
          <article>
            <p id="text"></p>
          </article>
        </section>
        
        <footer>
          <h3 id="acesso"> Você logou como <?php echo $tipo?></h3>
        </footer>
        
        </body>
        </html>
</html>