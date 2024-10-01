

//setTimeOut(funcion, tiempo)



/* function saludar(){
    console.log("por favor ingresar clave")
}


setTimeout(saludar,4000)


console.log("retiro exitoso") */


/* const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', ()=>{
    popup.classList.add('popup-active')
})

setTimeout( ()=>{
    popup.classList.remove('popup-active')
},2500  ) */



//setInterval( ()=> console.log('hola mundo'), 1000)

/* 
let num = prompt("ingresa los segundos")
let segundos = num *1000

let time= setInterval( ()=>{
    const date = new Date()
    console.log(date.toLocaleTimeString())}, segundos)


setTimeout( ()=>{clearInterval(time)}, segundos  ) */




/* function leerArchivo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Contenido del archivo');
      }, 2000); 
    });
  } */



  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.table(json))