<?php

$urlDeets = explode('/', strtolower(rtrim($_SERVER['REQUEST_URI'], '/')));
$urlCount = count($urlDeets);

define('url', 'http://'.$_SERVER['HTTP_HOST']);

$subdomains = explode('.', $_SERVER['HTTP_HOST']);
$subdomainCount = count($subdomains) - 1;
$domain = end($subdomains);
$subdomain = strtolower(trim(rtrim($_SERVER['HTTP_HOST'], $domain), '.'));

if ($_SERVER['HTTP_HOST'] == 'hire.carlfairclough.me') {

	
		define('name', 'hire');
		define ('classes', 'hire');
		$template = 'views/hire.php';
	
	
	include_once('template/header2.php');
	include_once($template);
	include_once('template/footer.php');
	
} else {
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
		}
	}

	include_once('template/header.php');
include_once($template);
include_once('template/footer.php');

}


?>
