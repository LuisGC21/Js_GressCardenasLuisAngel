function suma(){
    var valor1 = parseFloat(document.getElementById('numero1').value);
    var valor2 = parseFloat(document.getElementById('numero2').value);
    var resultado = valor1 + valor2;
    document.getElementById('reultado').value = resultado;
}
function resta(){
    var valor1 = parseFloat(document.getElementById('numero1').value);
    var valor2 = parseFloat(document.getElementById('numero2').value);
    var resultado = valor1 - valor2;
    document.getElementById('reultado').value = resultado;
}
function multiplicacion(){
    var valor1 = parseFloat(document.getElementById('numero1').value);
    var valor2 = parseFloat(document.getElementById('numero2').value);
    var resultado = valor1 * valor2;
    document.getElementById('reultado').value = resultado;
}
function division(){
    var valor1 = parseFloat(document.getElementById('numero1').value);
    var valor2 = parseFloat(document.getElementById('numero2').value);
    var resultado = valor1 / valor2;
    document.getElementById('reultado').value = resultado;
}
function limpiar(){
    document.getElementById('reultado').value = "";
    document.getElementById('numero1').value = "";
    document.getElementById('numero2').value = "";
}