
let num1= +prompt("Ingrese un número de 3 cifras");
if(num1>999|| num1<100){
    alert(`Error, el número ingresado no tiene 3 cifras`)
}else{
    let n = num1.toString();
    let s = parseInt(n.charAt(0)) + parseInt(n.charAt(1)) + parseInt(n.charAt(2));
    let resultado = Math.pow(s, 2);
    alert(`la suma de las cifras elevado al cuadrado del número ${num1} es ${resultado} `);

}
