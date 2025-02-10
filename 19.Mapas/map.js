//Map filter y reduce son los metodos mas usados que tienen todos 
//los arrays y son relacionados al paradigma de la programacion funcional

//Paradigma de Programacion
//Es una forma de abordar la Programacion. Una forma de programar
//siguiendo algunas ideas fundamentales

//En nuestra programacion funcional, nuestros datos comienzan con ciertos
//datos iniciales y le aplicamos funciones para obtener nuevos valores
//sin modificarlos directamente, sin realizar mutaciones
//Creamos un nuevos valores a partir de los originales

//Paradigma Imperativo: Como debe funcionar el programa
//Paradigma Funcional: Que resultado esperamos y promueve el uso de funciones puras

//Funciones puras
//Funciones que al ser invocadas con los mismo argumentos, siempre producen el mismo valor
//No producen efecto secundarios y permite programas predecibles

//Funciones de orden superior
//Funciones que reciben por parametro otras funciones o funciones
//que como resultado de su ejecucion retornan otra funcion

//MAP
//Usamos map cuando tenemos un array y queremos obtener 
//sus parametros son (numero, posicion, arrayOriginal)
//Si no nos interesa el primer parametro (_, posicion)
const numeros=[3,10,20,50];
const dobles=numeros.map(function(numero){
    return numero*2;
});
//map, filter y reduce deben ser fucniones puras, es decir, retornan siempre
//el mismo resultado ante los mismo parametros y ser funciones puras
//para no retornar efectos secundarios
const productos=[
    {id: "Wsr", nombre:"Camiseta", precio:500},
    {id: "Wtr", nombre:"Zapatillas", precio:2000},
    {id: "Wfr", nombre:"Pantalon", precio:1500},
];

const productosConDescuento= productos.map(function(producto){
    if(producto.precio<1000) return producto;

    return{
        ...producto,
        precio: producto.precio*0.9
    }
});
console.log(productosConDescuento)




