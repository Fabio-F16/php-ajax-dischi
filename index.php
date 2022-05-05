<?php  include ('php/data.php'); ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>PHP Aiax Dischi</title>
</head>
<body>
    <header></header>

    <main>
        <div class="container">
            <div class="row">
                <?php
                    foreach ($discs as $disc) {
                ?>
                    <div class="col-12 col-md-3 d-flex flex-column text-center">
                        <img src= "<?php echo $disc['poster'] ?>" alt="poster">
                        <h5><?php echo $disc['title'] ?></h5>
                        <p><?php echo $disc['author'] ?></p>
                        <p><?php echo $disc['year'] ?></p>
                    </div>
                    <?php
                        }
                    ?>
            </div>

        </div>
    </main>
</body>
</html>






