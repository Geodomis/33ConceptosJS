//Sintaxis de lenguaje de programación
//Las reglas que definen cómo podemos combinar distintos símbolos para producri
//intrucciones válidas y así crear un programa que la computadora entienda.

//Expresiones: Unidades de código que producen un valor al ser evaluadas,
//algunas expresiones pueden tener efectos secundarios 

//Expresiones primarias: Cualquier palabra pequeña que por sí sola produzca un valor.
let unaVariable;
unaVariable="texto";
unaVariable=123;
unaVariable=true;
unaVariable=false;
unaVariable=null;
unaVariable=undefined;
unaVariable=Symbol("FOO");
unaVariable=9007199254740992n;
//Expresión de función: Cuando escribimos una función en un lugar del código
//donde se espera un valor.
const func= function saludar(){
    console.log("Hola!");
};

numeros.filter(numero=> numero%2===0); //función anonima

const miObjeto={nombre:"Sasha", edad:18};
const miArray=[29,43,98];
//Invocar una función es una expresión
unaVariable= miObjeto.nombre;//Sasha
unaVariable= miObjeto['edad'];//18
unaVariable=miArray[0]; //29
//Operadores: nos permiten generar nuevos valores a partir de una o más expresiones
//Operadores: Son expresiones ya que nos permiten producir nuevos valores
let resultado=10+23;
let activo=false;
activo= !activo;
/*Nuevas expresiones:
expresión de función asíncrona       async function
invocación de función asíncrona      await
generadores                          function*
*/

//Haciendo un símil, las expresiones son como palabras
//mientras que las sentencias son consideradas oraciones

//Sentencias: Las acciones que son ejecutadas para que nuestro programa
//siga la lógica que queremos. Cada sentencia la terminamos en punto y coma "Ñ"

//Sentencia (statement) es una accion que JavaScript ejecuta para que ocurra algo,
//para que avance la logica de nuestro programa.

//Sentencia de expresion: Sirve para evaluar una expresion

//Sentencia vacia
const arr=[];
for(let i=0; i<=99; arr[i++]=i);
//Sentencia de bloque
while(true){
    console.log("Hola Mundo");
    console.log(2+3);
}
//Sentencia de declaracion
//Como buena practica declarar cada variable en una nueva linea 
//de codigo
let nombre="Sasha";

//Declaracion de funcion o Sentencia de funcion
//Sirve para crear una funcion con el nombre y los parametros 
//indicados dentro del scope donde se encuentra esa sentencia
const saludar= function(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`)
};
saludar("Juan", "Caicedo");
//IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function(nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}`)
})("Sasha","Lifszyc");
//Hosting, es lo que nos permite llamar una funcion antes de haberla declarado
//Si hacemos lo mismo con la expresion de funcion, el programa nos dara un error
//Cuando es una expresion de funcion el nombre es opcional y el punto y coma es obligatorio
//mientras que para una declaracion el nombre siempre sera requerido y no es necesario
//el punto y coma
saludar3("Maria","Laura");
function saludar3(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`)

}

//Sentencia de control
//Podemos alterar el flujo normal de la ejecucion. Podemos decidir
//que flujo va a seguir la ejecucion de nuestro programa

//Sentencias de salto
//Usamos las sentencias de salto para que la ejecucion de nuestro
//programa salte o retorne a otra parte
//break, continue, return, throw

//Sentencias Miscelaneas
//debugger como un señal de stop para buscar bugs
//'use strict' para ver muchos mas errores en la consola