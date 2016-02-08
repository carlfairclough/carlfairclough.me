<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <?php if (project == 'formisimo') { ?>
        <title>Carl Fairclough | Formisimo Design</title>
        <meta name="description" content="Overview of Carl Fairclough's role in the design of Formisimo, over the course of 6 months.">
        <?php } elseif (project == 'textburst') { ?>
        <title>Carl Fairclough | Textburst Design</title>
        <meta name="description" content="Overview of Carl Fairclough's role in the design of Textburst, over the course of 18 months.">
        <?php } elseif (project == 'champio') { ?>
        <title>Carl Fairclough | Champio Design</title>
        <meta name="description" content="Overview of Carl Fairclough's role in the design of Champio, over the course of 4 weeks.">
        <?php } elseif (project == 'timetastic') { ?>
        <title>Carl Fairclough | Timetastic Design</title>
        <meta name="description" content="Overview of Carl Fairclough's role in the design of Timetastic, over the course of 18 months.">
        <?php } else { ?>
            <title>Carl Fairclough | Designer</title>
            <meta name="description" content="Carl Fairclough is a digital designer from Manchester, focusing on app design and everything that it entails.">
        <?php }; ?>
        

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
	<link href='http://fonts.googleapis.com/css?family=Karla:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="/css/normalize.css">
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="/css/style.css">
        <script src="/js/vendor/jquery-1.10.2.min.js"></script>
        <script src="/js/main.js"></script>

    </head>
    <body class="<?php echo classes; ?>">
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <header>
            <nav>
            <div class="row">
                <div class="col-4 sma-col-6 mini-bio">
                    <a class="logo" href="/">Carl Fairclough</a>
                    <div>Digital Designer</div>
                    <div>Manchester</div>
                </div>
                <div class="col-1 right sma-col-6 main-links">
                    <div><a href="http://twitter.com/carlfairclough">Twitter</a></div>
                    <div><a href="http://github.com/carlfairclough">GitHub</a></div>
                    <div><a href="http://linkedin.com/in/cfairclough">LinkedIn</a></div>
                </div>
            </div>
            </nav>

            <?php if (project == 'project') { ?>
            <div class="row">
                <div class="col-7 push-3 sma-push-clear sma-col-12">
                    <h1>I design things</h1>
                    <p>I design and build clean &amp; usable digital products using research & hard work. I focus mainly on mobile/web app design, with a penchant for data visualisation &amp; branding.</p>
                </div>
            </div>
            <?php }; ?>
        </header>
