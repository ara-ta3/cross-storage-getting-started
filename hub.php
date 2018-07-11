<?php
header('Access-Control-Allow-Origin','*');
header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
header('Access-Control-Allow-Headers','X-Requested-With');
header('Content-Security-Policy',"default-src 'unsafe-inline' *");
header('X-Content-Security-Policy',"default-src 'unsafe-inline' *");
header('X-WebKit-CSP',"default-src 'unsafe-inline' *");
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript" src="./node_modules/cross-storage/dist/client.js"></script>
    <script type="text/javascript" src="./node_modules/cross-storage/dist/hub.js"></script>
    <!-- :poop: -->
    <script defer type="text/javascript" src="hub.js"></script>
</head>
<body>
    
</body>
</html>
