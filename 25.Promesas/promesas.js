'use strict'
fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
    .then((response)=>{
        response.json().then((data)=>{
            console.log(data);
        });
    })
    .catch((err)=>{
        console.log(err);
    });

//Callback, porque es una llamada de vuelta sin saber el resultado
//El callback siempre ira al final de los parametros 
const operation=(numero1, numero2, callback)=>{
    return setTimeout(()=>{
        callback(numero1,numero2)
    }, 500)
    
}
operation(1,3,(a,b)=>{
    console.log(a+b)
});

//Con promesas

const doAsyncStuffWithPromises=(numero1, numero2) =>{
    const resultado=numero1+numero2
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(resultado)
        },500)
    })
}

doAsyncStuffWithPromises(1,3)
    .then(result=>console.log(result))


