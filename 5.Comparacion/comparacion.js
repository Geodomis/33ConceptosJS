 //Para realizar comparaciones ¿Cuál usamos === o ==?
 //=== (Operador de igualdad estricta)
 //Se utiliza cuando comparamos valores primitivos, este nos dirá 
 //si son del mismo tipo y si tienen el mismo valor.
 "2"===2;
 "hola"==="Hola";
 "Piola"==="Piola";

//== (Operador de igualdad débil) loose equality
//Cuando se utiliza, JavaScript realiza coerción de tipos: cuando realizamos ciertas
//operaciones entre valores de distintos tipos, JavaScript internamente convierte uno
//de ellos o ambos para que sea n del mismo tipo y pueda concretar la operación
8=="8"; //true
"  "==0; //true
"/n"==0; //true

//Aunque sean invisible para nosotros, cuando comparamos objetos (cualquier cosa que no sea un valor primitivo),
// en verdad estamos comparando referencias.

//El tripe igual tambien se lo conoce como OPERADOR DE IDENTIDAD
//Cuando lo usamos para comparar objetos, este nos dice si estamos hablando del  mismo
//espacio de memoria, del mismo objeto en la memoria


//Para verificar si dos objetos son iguales y que no tengan las mismas referencias
//se puede realizar estos dos métodos
var sacha1={nombre: "Sasha", edad:29};
var sacha2={nombre: "Sasha", edad:29};
//JSON.stringify convierte las claves y los valores en un string
JSON.stringify(sacha1) === JSON.stringify(sacha2); //true
//Sin embargo si no están en el mismo orden al momento de compararlos
//no van a ser los mismo
var sacha3={edad:29,nombre: "Sasha"};
JSON.stringify(sacha1) === JSON.stringify(sacha3); //false

//Usar la librería low dash que tiene una librería isEqual para iterar
//objetos para iterar objetos por todas sus propiedades de manera recursiva.
_.isEqual(sacha1,sacha2);
