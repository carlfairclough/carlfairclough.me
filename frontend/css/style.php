<?php

// THIS COMPILES SCSS

$directory = "scss";

require "../../backend/compilers/scss.inc.php";
scss_server::serveFrom($directory);

?>