let entradaGeneral= +prompt("Ingrese la cantidad de entradas generales vendidas");
let entradaMayor= +prompt("Ingrese la cantidad de entradas para mayores de 65 vendidas");
let entradaMenor= +prompt("Ingrese la cantidad de entradas para menores vendidas");
alert(`Se vendio  ${entradaGeneral} entradas general, recaudando ${entradaGeneral*150} soles`);
alert(`Se vendio  ${entradaMayor} entradas mayor, recaudando ${entradaMayor*65} soles`);
alert(`Se vendio  ${entradaMenor} entradas menor, recaudando ${entradaMenor*80} soles`);
alert(`El total recaudado es de ${(entradaGeneral*150)+(entradaMayor*65)+(entradaMenor*80)}soles `);