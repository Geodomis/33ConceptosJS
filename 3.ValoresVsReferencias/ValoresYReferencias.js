//Conocer que hay dos tipos de datos
//1.Primitivos: Strings, Number, Boolean, Null, Undefined, Symbol, Bigint

let fruta= "banana";
let fruta2= fruta;
fruta="mandarina";
console.log(fruta, fruta2);

//Objetos
var fruit={
 nombre:"banana",
 cantidad:2,
 tieneCascara:true
};

fruit.color="verde";
delete fruit.tieneCascara;

//Las funciones tambien son tratadas como objeto
//objeto es cualquier cosa que no sea un valor primitivo

//HEAP o memoria dinamica es el area de memoria destinada para
//almacenar los objetos.

//Referencia es la posicion de memoria que se usa para acceder a un objeto

var fruit2= fruit; //Referenciamos el espacio en memoria del objeto
//no todo el contenido

//Si tenemos multiples variables apuntando a un objeto y se modifica
//una de las propiedades de ese objeto, el cambio se refleja en el objeto
//que ambas variables hacen referencia, es decir las dos variables se veran 
//afectadas por el cambio 
fruit.cantidad=fruit.cantidad+6;

//En este caso pasamos como parametro de una funcion un dato primitivo
//lo que provoca que se cree una copia del valor de la variable cantidad 
//y se modifique el duplicado sin alterar la variable original y las variables
//de la funcion se van a descartar
function comer(cantidad){
    cantidad=cantidad-12;
}
var cantidad=23;
comer(cantidad);

//Para este caso el parametro es un objeto, lo que se copia es la referencia
//que apunta a dicho objeto, al tener la misma referencia y apuntar la misma 
//direccion de memoria, si dentro de la funcion se modifica alguna propiedad del
//objeto, se modifican todos los objetos que hacen referencia a ese objeto
function comerMas(fruit){
    fruit.cantidad=cantidad-1;
}
comer(fruit);


