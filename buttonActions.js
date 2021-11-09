let material='unset';
let quantity="unset";
let startTemp="unset";
let endTemp="unset";


/*$chillData = array('material'=> 'cat',
                    'quantity'=> 'seven',
                    'startTemp'=> '',
                    'endTemp'=> $endTemp');*/

//DOM handlers below for buttons in index

document.getElementById('plastic').onclick = setPlastic();
document.getElementById('glass').onclick = setGlass();
document.getElementById('aluminum').onclick = setAluminum();
document.getElementById('single').onclick = setSingle();
document.getElementById('sixpack').onclick = setSixpack();
document.getElementById('case').onclick = setCase();
document.getElementById('startWarm').onclick = setSWarm();
document.getElementById('startRoom').onclick = setSRoom();
document.getElementById('startCool').onclick = setSCool();
document.getElementById('endCool').onclick = setECool();
document.getElementById('endCold').onclick = setECold();
document.getElementById('endFrost').onclick = setEFrost();

//functions for container material type
function setPlastic() {
    material='Plastic';
    document.getElementById('material').setAttribute('value',material);
}
function setGlass() {
    material='Glass';
    document.getElementById('material').setAttribute('value',material);
}
function setAluminum() {
    material='Aluminum';
    document.getElementById('material').setAttribute('value',material);
}

//functions for container quantity
function setSingle() {
    quantity='Single';
    document.getElementById('quantity').setAttribute('value',quantity);
}
function setSixpack() {
    quantity='Sixpack';
    document.getElementById('quantity').setAttribute('value',quantity);
}
function setCase() {
    quantity='Case';
    document.getElementById('quantity').setAttribute('value',quantity);
}

//functions for starting temp
function setSWarm() {
    startTemp='Warm';
    document.getElementById('startTemp').setAttribute('value',startTemp);
}
function setSCool() {
    startTemp='Cool';
    document.getElementById('startTemp').setAttribute('value',startTemp);
}
function setSCold() {
    startTemp='Cold';
    document.getElementById('startTemp').setAttribute('value',startTemp);
}

//fucntions for end temp
function setECool() {
    endTemp='Cool';
    document.getElementById('endTemp').setAttribute('value',endTemp);
}
function setECold() {
    endTemp='Cold';
    document.getElementById('endTemp').setAttribute('value',endTemp);
}
function setEFrost() {
    endTemp='Near Frozen';
    document.getElementById('endTemp').setAttribute('value',endTemp);
}