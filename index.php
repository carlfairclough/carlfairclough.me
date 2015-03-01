<?php

$urlDeets = explode('/', strtolower(rtrim($_SERVER['REQUEST_URI'], '/')));
$urlCount = count($urlDeets);

define('url', 'http://'.$_SERVER['HTTP_HOST']);



if ($urlCount == '1') {
	$templateDir='template/home.php';
} elseif ($urlCount == '3' && $urlDeets[1] == 'project') {

	if ($urlDeets[2] == 'timetastic') {
		$templateDir = 'template/timetastic.php';
		define ('classes', 'project-body timetastic');
		define ('project', 'timetastic');
	} elseif ($urlDeets[2] == 'textburst') {
		$templateDir = 'template/textburst.php';
		define ('classes', 'project-body textburst');
		define ('project', 'textburst');
	} elseif ($urlDeets[2] == 'formisimo') {
		$templateDir = 'template/formisimo.php';
		define ('classes', 'project-body formisimo');
		define ('project', 'formisimo');
	} elseif ($urlDeets[2] == 'champio') {
		$templateDir = 'template/champio.php';
		define ('classes', 'project-body champio');
		define ('project', 'champio');
	}
}

include_once('template/header.php');
include_once($templateDir);
include_once('template/footer.php');
?>