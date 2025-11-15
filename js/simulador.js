// simulador.js

var productos = [
  { id: 1, nombre: "Lap", precio: 15000 },
  { id: 2, nombre: "Mouse", precio: 400 },
  { id: 3, nombre: "Teclado", precio: 800 }
]

var carrito = []

function mostrarProductos(){
  console.log("=== PRODUCTOS ===")
  for (var i = 0; i < productos.length; i++){
      var p = productos[i]
      console.log(p.id + ") " + p.nombre + " $" + p.precio)
  }
  console.log("===============")
}

function agregarProducto(){
  mostrarProductos()
  var idTexto = prompt("Escribe el ID del producto que quieres agregar:")
  var idNum = parseInt(idTexto)

  if (isNaN(idNum)) {
      alert("Eso no es un número :(")
      return
  }

  var productoEncontrado = null
  for (var i = 0; i < productos.length; i++){
      if (productos[i].id === idNum){
          productoEncontrado = productos[i]
      }
  }

  if(productoEncontrado == null){
      alert("No existe ese producto")
      return
  }

  var cantTexto = prompt("¿Cuántos quieres de \"" + productoEncontrado.nombre + "\" ?")
  var cantidad = parseInt(cantTexto)

  if (cantidad <= 0 || isNaN(cantidad)) {
      alert("Cantidad no válida")
      return
  }

  carrito.push({
      nombre: productoEncontrado.nombre,
      precio: productoEncontrado.precio,
      cantidad: cantidad
  })

  alert("Agregado al carrito: " + cantidad + " x" + productoEncontrado.nombre)
}

function verCarrito(){
  console.log("=== CARRITO ===")
  if (carrito.length == 0){
      console.log("Carrito vacío")
      alert("Todavía no hay nada en el carrito")
      return
  }
  var total = 0
  for (var i = 0; i < carrito.length; i++){
      var item = carrito[i]
      var sub = item.precio * item.cantidad
      total = total + sub
      console.log(
          (i+1) + ") " + item.nombre +
          " x" + item.cantidad +
          " = $" + sub
      )
  }

  var totalTotal = total
  console.log("Total a pagar (sin descuentos): $" + totalTotal)

  if (totalTotal > 20000){
      console.log("Plus : Sigue asi y obtendras un descuento)")
  }
}

function menu(){
  var textoMenu = "SIMULADOR JS\n" +
      "1) Ver productos\n" +
      "2) Agregar producto al carrito\n" +
      "3) Ver carrito\n" +
      "4) Salir\n\n" +
      "Escribe una opción (1-4):"
  var opcion = prompt(textoMenu)
  return parseInt(opcion)
}

function iniciarSimulador(){
  alert("Bienvenido al mini simulador JS.\nUsa la consola para ver los mensajes :D")

  var seguir = true

  while (seguir){
      console.clear()
      var op = menu()

      if (op === 1){
          mostrarProductos()
          alert("Mira la consola para ver los productos")
      } else if (op === 2){
          agregarProducto()
      } else if (op === 3){
          verCarrito()
      } else if (op === 4){
          verCarrito()
          var seguro = confirm("¿Seguro que quieres salir?")
          if (seguro){
              seguir = false
              alert("Adiós, gracias por usar el simulador :)")
          }
      } else {
          alert("Opción no válida, escribe un número entre 1 y 4")
      }

      if (seguir){
          var otraVez = confirm("¿Quieres hacer otra cosa en el simulador?")
          if (!otraVez) {
              seguir = false
              alert("Simulador terminado por el usuario.")
          }
      }
  }
}

iniciarSimulador()
