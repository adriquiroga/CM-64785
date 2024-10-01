/* 
productos  nombre,precio,stock
crear esos productos
lista de productos
filtrar productos
*/


const Producto = function (nombre,precio,stock){
    this.nombre = nombre
    this.precio=precio
    this.stock=stock
}

let producto1= new Producto("lenovo", 3500000,20)
let producto2= new Producto("samsung", 45000,25)
let producto3= new Producto("mac", 6500000,7)
let producto4= new Producto("mac air", 6500000,7)
let producto5= new Producto("macbook m1", 6500000,7)
let producto6= new Producto(" smartwach", 350000,46)

let lista=[producto1,producto2,producto3,producto4,producto5,producto6]

function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto a buscar").trim().toUpperCase()
    let resultado = lista.filter((producto)=>producto.nombre.toUpperCase().includes(palabraClave))
    
    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no hay conincidencias")
    }
}


/* 
usando sweetalert y dom:*
crear productos nuevos*
crear los input para que el usuario ingrese todo (nombre,precio,stock)*
validar datos del formulario*
validar si ya existe el producto
mostrar los productos
eventos
*/



function agregarProductos(){

    Swal.fire({
        title:"Agregar un producto",
        html:
        `<label>Nombre:</label> <input id="nombre-input" class="swal2-input" type="text" autofocus>
        <label>Precio:</label><input id="precio-input" class="swal2-input" type="number" step="0.01">
        <label>Stock:</label><input id="stock-input" class="swal2-input" type="number" step="1">`,
        
        showCancelButton: true,
        confirmButtonText:"agregar",
        cancelButtonText:"cancelar"
    }).then((result)=>{
        if(result.isConfirmed){
            let nombre = document.getElementById("nombre-input").value.trim()
            let precio = parseFloat(document.getElementById("precio-input").value)
            let stock =  parseInt(document.getElementById("stock-input").value)

            if(isNaN(precio) || isNaN(stock) || nombre == ""){
                Swal.fire({
                        icon:"error",
                        title:"Error",
                        text:"por favor ingresa datos validos"
                    })
                    return
            }
            let producto = new Producto(nombre,precio,stock)

            if(lista.some((elemento)=> elemento.nombre === producto.nombre)){
                Swal.fire({
                    icon:"warning",
                    title:"Advertencia",
                    text:"el producto ya existe en la lista"
                })
                return
            }
            lista.push(producto)

            Swal.fire({
                icon:"success",
                title:"producto agregado",
                text:`se ha agregado el producto ${producto.nombre}`,
                timer: 2500
            })
            console.table(lista)
        }
    })
}

const agregar =  document.getElementById("agregarProducto")
agregar.addEventListener("click",agregarProductos)