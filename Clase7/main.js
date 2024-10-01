

/* let titulo = document.getElementById("title")

titulo.innerText = "modificado" */


/* let productos = [
    {
    id:1,
    nombre: "Arroz",
    precio: 1000
    },
    {
    id:1,
    nombre: "fideos",
    precio: 1000
    },
    {
    id:1,
    nombre: "pan",
    precio: 1000
    },
]



for(const producto of productos ){
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<h1> Producto: ${producto.nombre}</h1>
                            <h3> id: ${producto.id}</h3>
                            <p> precio: ${producto.precio}</p>`
    document.body.append(contenedor)
} */


/* function saludar(){
   let nombre= prompt("pone tu nombre")
    alert( "bienvenido " + nombre)
}
//elemento.addEventListtener( evento, funcion)

let boton = document.getElementById("boton")

boton.addEventListener("click",saludar)
 */



/* let titulo = document.getElementById("titulo")

titulo.addEventListener("click", ()=>console.log("pumpumpumpum"))
titulo.addEventListener("mouseup", ()=>console.log("recarga"))

titulo.addEventListener("mousemove", 
function(event){
    console.log("el puntero es en posicion   x: " +event.clientX + " y: "+ event.clientY)
} 

) */

let inputTextField = document.getElementById("inputTextField")

inputTextField.addEventListener("change", function(e){
    console.log(`valor del campo cambio a :`+ e.target.value)
})