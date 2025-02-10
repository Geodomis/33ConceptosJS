// TIPOS DE DATOS PRIMITIVOS EN JAVASCRIPT

// 1. Undefined: Variable declarada pero no inicializada.
let indefinido;
console.log("Undefined:", indefinido); // Output: undefined

// 2. Null: Representa una referencia nula o vacía.
let nulo = null;
console.log("Null:", nulo); // Output: null

// 3. Boolean: Representa un valor verdadero o falso.
let esVerdadero = true;
let esFalso = false;
console.log("Boolean (true):", esVerdadero); // Output: true
console.log("Boolean (false):", esFalso);   // Output: false

// 4. Number: Representa números, tanto enteros como decimales.
let entero = 42;
let decimal = 3.14;
let negativo = -7;
let infinito = Infinity;
let noEsUnNumero = NaN; // Resultado de operaciones inválidas con números.
console.log("Number (entero):", entero);         // Output: 42
console.log("Number (decimal):", decimal);       // Output: 3.14
console.log("Number (negativo):", negativo);     // Output: -7
console.log("Number (Infinity):", infinito);     // Output: Infinity
console.log("Number (NaN):", noEsUnNumero);      // Output: NaN

// 5. BigInt: Representa números enteros muy grandes (mayor que 2^53 - 1).
let numeroGrande = 1234567890123456789012345678901234567890n;
console.log("BigInt:", numeroGrande); // Output: 1234567890123456789012345678901234567890n

// 6. String: Representa una secuencia de caracteres.
let texto = "Hola, Mundo";
let textoConComillas = 'JavaScript es "genial"';
let textoTemplate = `Este es un template literal con un número: ${entero}`;
console.log("String:", texto);                // Output: Hola, Mundo
console.log("String con comillas:", textoConComillas); // Output: JavaScript es "genial"
console.log("String (template):", textoTemplate);      // Output: Este es un template literal con un número: 42

// 7. Symbol: Representa un valor único.
let simbolo1 = Symbol("miSimbolo");
let simbolo2 = Symbol("miSimbolo"); // Aunque el texto es igual, los símbolos son únicos.
console.log("Symbol:", simbolo1);          // Output: Symbol(miSimbolo)
console.log("Symbol (único):", simbolo1 === simbolo2); // Output: false

// 8. Backtick (``): permite interpolar una variable o expresión dentro del string.
let nombre= "George";
let numero= 23;
let presentacion= `Hola me llamo ${nombre} y tengo ${numero} de edad`;
console.log(presentacion);

//Para saber la longitud de una variable hacemos uso de la propiedad
// .length
console.log(nombre.length);
console.log("".length);

//Para convertir un dato en string se usa .toString
let num=80;

num.toString();
numero+"";
//No usar cuando la variable es null o undefine

//Importante al usar toFixed() para redondear
//porque el resultado sera un String
let prueba=(0.1+1.2).toFixed(2); //Sera un String
let prueba2=+(0.1+1.2).toFixed(2); //Sera un numero

//Object Wrapper es un objeto que envuelve a un valor primitivo
//cuando queremos accer a una propiedad o llamar a un metodo del mismo
let nom="Pedro";
nom.toUpperCase();

//Cuando tenemos variables con null o undefined no podremos
//aceder a los metodos de los objetos (Object Wrapper)


