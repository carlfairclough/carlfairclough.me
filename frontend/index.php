<?php

$allowed_hosts = array('www.carlfairclough.me', 'carlfairclough.me');

if (!isset($_SERVER['HTTP_HOST']) || !in_array($_SERVER['HTTP_HOST'], $allowed_hosts)) {
    header("HTTP/1.0 404 Not Found");
    exit;
}

if (substr($_SERVER['HTTP_HOST'], 0, 4) === 'www.') {
    header('Location: http'.(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']=='on' ? 's':'').'://' . substr($_SERVER['HTTP_HOST'], 4).$_SERVER['REQUEST_URI']);
    exit;
}


$urlDeets = explode('?', strtolower(rtrim($_SERVER['REQUEST_URI'], '/')))[0];
$urlDeets = explode('/', strtolower(rtrim($urlDeets, '/')));
$urlCount = count($urlDeets);

define('url', 'http://'.$_SERVER['HTTP_HOST']);

$subdomains = explode('.', $_SERVER['HTTP_HOST']);
$subdomainCount = count($subdomains) - 1;
$domain = end($subdomains);
$subdomain = strtolower(trim(rtrim($_SERVER['HTTP_HOST'], $domain), '.'));

if ($_SERVER['HTTP_HOST'] == 'carlfairclough.me' || $_SERVER['HTTP_HOST'] == 'www.carlfairclough.me'){
    if ($urlCount == '1') {
        $template = 'template/home.php';
    } elseif ($urlCount == '3' && $urlDeets[1] == 'project') {
            if ($urlDeets[2] == 'timetastic') {
                define('name', 'timetastic-project');
                define ('classes', 'project-body timetastic');
                define ('project', 'timetastic');
                $template = 'template/timetastic.php';
            } elseif ($urlDeets[2] == 'textburst') {
                define('name', 'textburst-project');
                $template = 'template/textburst.php';
                define ('classes', 'project-body textburst');
                define ('project', 'textburst');
            } elseif ($urlDeets[2] == 'formisimo') {
                define('name', 'formisimo-project');
                $template = 'template/formisimo.php';
                define ('classes', 'project-body formisimo');
                define ('project', 'formisimo');
            } elseif ($urlDeets[2] == 'champio') {
                define('name', 'champio-project');
                $template = 'template/champio.php';
                define ('classes', 'project-body champio');
                define ('project', 'champio');
            } else {
                header("HTTP/1.0 404 Not Found");
                exit;
            }
        } else {
            header("HTTP/1.0 404 Not Found");
            exit;
        }

        include_once('template/header.php');
        include_once($template);
        include_once('template/footer.php');
    
} else {
    header("HTTP/1.0 404 Not Found");
    exit;
}

?>
