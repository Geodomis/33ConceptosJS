//1. Chequeo de tipos
//Es el proceso de verificar y hacer cumplir las 
//restricciones de tipos que existen en un lenguaje

//El chequeo estático es cuando el código se compila antes
//de ser ejecutado, el programa se asegura de recibir el tipo de dato
//que se espera

//Cuando el chequeo se realiza durante la ejecución es un chequeo dinámico
//JS utiliza un cheque dinámico asi como python y otros

//2. Exignencia de tipos, JS no es muy exigente
//Dado que se pueden hacer algunas operaciones con distintos tipos de variables

true+true+true;
console.log("Tengo que comprar"+["bananas","naranjas"]+" y limones");
console.log((true+true)*50);
var user;
//user.email   Me dara un error de tipo
//Se hace coerción de tipos
//Es la cohesión implícita de tipos que realiza el motor de JavaScript
//para poder concretar una operación

//3.Conversión explícita de tipos
//Para evitar la cohesión de tipos realizamos conversión 
String(123);
Number("3.15");
Boolean(null);
2019+"";
//Podemos llamar a diferentes métodos 
(20193).toString
//Si esta en una variable, podemos llamar el método en la variable
var valor=true;
valor.toString();
//Podemos obtener un number anteponiendo un + a un String
+"123";
+true;
//Para obtener un booleano usamos un doble signo de excalamación !!
var texto="hola";
!!texto;
!!"";

//4. Equivalencia y compatibilidad de tipos
//Como un lenguaje determina que un tipo es compatible con 
//otro tipo o equivalente a otro tipo.

//Tipado Nominal: Dos tipos son compatibles cuando tienen el mismo nombre
//o cuando uno es un subtipo del otro (por herencia)

//Tipado Estructural: Para que dos tipos sean compatibles sólo basta con que
//compartan la estructura que nos interesa

//Los dos tipados se realizan en chequeos de tipo estático

//Para los lenguajes que tienen un chequeo dinámico hacen uso del Duck Typing
//No nos importa de que tipo es un objeto, siempre y cuando tenga los 
//atributos y métodos a los cuales queramos acceder. 

//Los lenguajes dinámicos incentivan a mantener una documentación actualizada
//y escribit muchos tests para asegurarnos de que el código funciona como debería
//antes de lanzar una nueva versión de un programa