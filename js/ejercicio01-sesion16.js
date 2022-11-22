let ejer = +prompt("Ingrese un número");
switch(ejer){
    case 1:

        // let multiplicacion =function(x,y){
        //     return x*y
        // }
        // let expon =function(x,y){
        //     return Math.pow(x,y)
        // }
        // let suma = (x,y) => {return x+y};
        
        // var result = multiplicacion(2,3);
        // alert(result)
        // result = suma (3,4);
        // alert (result);
        let resta = (x,y) =>{
            return x-y;
        }
        result = resta (5,3);
        alert(result);

    break;

    case 2:

        // let pasF = (grado) => {
        // return Fahrenheit = grado *1.8 + 32;
        // };
        // let result2 = pasF(32);
        // alert(result2);
        function FahrenheitaC( Fa){
            let Celcius = ((Fa - 32)*5)/9;
            alert(`${Fa}°F es igual a ${Math.round(Celcius)}°C`)
    
         }
         FahrenheitaC(150);

    break;

    case 3:

        num1 = +prompt("Ingrese un 1er número");
        num2 = +prompt("Ingrese un 2do número")
        function suma2(){
    
            return (num1+num2)
    
        }

        let result = suma2(num1,num2);
        alert(`El resultado de la suma es ${result}`)
        
        
    break;
    default:
        alert("Ingrese una opción válida")

}







