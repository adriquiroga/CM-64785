


/* const frutas = ["manzana", "banana", "naranja"] */


                //FOREACH

/*foreach(): ejecuta una funcion para cada elemento del array*/


/* frutas.forEach(function(x){console.log(x.toUpperCase())}) */


                //MAP


//Map(): crear un NUEVO array con el resultado de llamar a una funcion por cada elemento


//const numeros = [1,2,3,4,5]
//declaro const "doble" y aca guardo el nuevo array
/* const descuento= numeros.map( (x)=>{ return x*0.5} )

console.log(numeros) */


                //FIND


//find(): busca un elemento en el array que cumpla con una condicion. DEVUELVE EL PRIMERO
/* 
const numeros = [1,2,3,4,5,23,6,7,8,9,3,5,4,6,8,9]

const encontrado = numeros.find( (numero)=> numero > 5)
console.log(encontrado) */



                //FILTER


//filter(): crea un nuevo array con todos los elementos que cumplan con la condicion

/* const numeros = [1,2,3,4,5,23,6,7,8,9,3,5,4,6,8,9]

const numerosPares = numeros.filter(  function(pochoclo){

    return pochoclo % 2 === 0  // si lo divido por dos y da cero es par

}  )


console.log(numerosPares)
 */


            //REDUCE


            const precioFinal= [1,2,3,4,5]
            const carrito = precioFinal.reduce((acc,el)=>acc+el)


            //SORT
//el sort es un metodo que modifica el array original. (destructivo)


            const numeros = [1,23,56,45,78,89,2,65,4,2,6,85,1,321,65,45]
            numeros.sort((a,b)=>a-b)
            
            console.log(numeros)