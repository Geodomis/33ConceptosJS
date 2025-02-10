// Scope léxico o estático (Lexical Scoping)
//El scope de cada variable se determina leyendo el código del programa, sin ejecutarlo.

//Cuando hablamos de Scope hace referencia a contexto de ejeciución o de entorno

//Scope Global
//Las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa
//Son las variables declaradas fuera de toda función o bloque de código
//Sin importar si las declaramos con var, let o const y estarán en memoria
//durante toda la ejecución del programa
var fruta="mango";
//Bloque de código: toda porción de códio que está encerrada entre llaves:{}

//Scope Local
//Las variables locales sólo se pueden acceder desde una parte de nuestro programa
//Y se subdivide en dos, scope de función y scope de bloque y estarán en memoria 
//durante la ejecución de la funcióno bloque

//Scope de función
//Accesibles dentro de toda la función, pero no fuera de la misma
//Las variables declaradas con var siempre tendrán un scope de función

//Scope de bloque
//Accesibles dentro de todo el bloque, pero no fuera del mismo
//Las variables declaradas con let o const tendrán un scope de bloque

//Para que JS no me cree una variable que sin querer escriba mal uso use strict
'use strict';

function comer(){
    var fruta= "banana"; //Ocultamiento de variable
    otrafruta="naranja";
    if(true){
        let unafruta="pera";
    }
    function lavar(){
        console.log("Lavando"+fruta);
    }
    console.log("comiendo "+otrafruta);
    //console.log("comiendo"+unafruta);//va a dar un error xq la variable
    //está en otro bloque a la cual no puede ser accedida fuera de este
}
comer();
//Ocultamiento de variables (variable shadowing)
//Se produce cuando una variable que está en un scope más reducido tiene el
//mismo nombre que otra que está en un scope superior siguiendo su cadena de scopes.