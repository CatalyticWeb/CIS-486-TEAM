<?php

$jsonData = array();
$material = $_POST['material'];
$quantity = $_POST['quantity'];
$startTemp = $_POST['startTemp'];
$endTemp = $_POST['endTemp'];

$jsonData = array('material'=> $material, 'quantity'=> $quantity, 'startTemp'=> $startTemp, 'endTemp'=> $endTemp);

echo $material;
echo $quantity;
echo $startTemp;
echo $endTemp;


$fp = fopen('chillData.json', 'w');
fwrite($fp, json_encode($jsonData));
fclose($fp);

?>