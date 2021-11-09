<?php

$jsonData = array();
$material = $_POST['material'];
$quantity = $_POST['quantity'];
$startTemp = $_POST['startTemp'];
$endtemp = $_POST['endTemp'];

$jsonData = array('material'=> $material, 'quantity'=> $quantity, 'startTemp'=> $startTemp, 'endTemp'=> $endTemp);

echo($jsonData);

$fp = fopen('chillData.json', 'w');
fwrite($fp, json_encode($jsonData));
fclose($fp);

?>