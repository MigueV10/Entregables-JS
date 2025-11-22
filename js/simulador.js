
const productos = [
    { id: 1, nombre: "Lap", precio: 15000 },
    { id: 2, nombre: "Mouse", precio: 400 },
    { id: 3, nombre: "Teclado", precio: 800 }
  ];
  
  const carrito = [];
  
  function mostrarProductos() {
    let texto = "=== PRODUCTOS DISPONIBLES ===\n\n";
    for (let i = 0; i < productos.length; i++) {
      const p = productos[i];
      texto += `${p.id}) ${p.nombre} - $${p.precio}\n`;
    }
    alert(texto);
  }
  
  function agregarProducto() {
    mostrarProductos();
  
    const idTexto = prompt("Escribe el ID del producto que quieres agregar:");
    if (idTexto === null) return; // usuario canceló
  
    const idNum = parseInt(idTexto);
  
    if (Number.isNaN(idNum)) {
      alert("Eso no es un número válido :(");
      return;
    }
  
    let productoEncontrado = null;
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id === idNum) {
        productoEncontrado = productos[i];
        break;
      }
    }
  
    if (productoEncontrado === null) {
      alert("No existe un producto con ese ID.");
      return;
    }
  
    const cantTexto = prompt(
      `¿Cuántos quieres de "${productoEncontrado.nombre}"?`
    );
    if (cantTexto === null) return;
  
    const cantidad = parseInt(cantTexto);
  
    if (Number.isNaN(cantidad) || cantidad <= 0) {
      alert("Cantidad no válida");
      return;
    }
  
    carrito.push({
      nombre: productoEncontrado.nombre,
      precio: productoEncontrado.precio,
      cantidad: cantidad
    });
  
    alert(`Agregado al carrito: ${cantidad} x ${productoEncontrado.nombre}`);
  }
  
  function verCarrito() {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
  
    let texto = "=== CARRITO ===\n\n";
    let total = 0;
  
    for (let i = 0; i < carrito.length; i++) {
      const item = carrito[i];
      const sub = item.precio * item.cantidad;
      total += sub;
      texto += `${i + 1}) ${item.nombre} x${item.cantidad} = $${sub}\n`;
    }
  
    texto += `\nTotal a pagar (sin descuentos especiales): $${total}`;
    if (total > 20000) {
      texto += "\n\nTip: gastaste mucho, podrías recibir un descuento en el futuro :)";
    }
  
    alert(texto);
  }
  
  function menu() {
    const textoMenu =
      "SIMULADOR JS\n\n" +
      "1) Ver productos\n" +
      "2) Agregar producto al carrito\n" +
      "3) Ver carrito\n" +
      "4) Salir\n\n" +
      "Escribe una opción (1-4):";
  
    const opcion = prompt(textoMenu);
    if (opcion === null) {
      // si cancela, lo tratamos como salir
      return 4;
    }
    return parseInt(opcion);
  }
  
  function iniciarSimulador() {
    alert(
      "Bienvenido al mini simulador JS.\n" +
      "Vas a interactuar usando ventanas de diálogo."
    );
  
    let seguir = true;
  
    while (seguir) {
      const op = menu();
  
      if (op === 1) {
        mostrarProductos();
      } else if (op === 2) {
        agregarProducto();
      } else if (op === 3) {
        verCarrito();
      } else if (op === 4) {
        verCarrito();
        const seguro = confirm("¿Seguro que quieres salir?");
        if (seguro) {
          seguir = false;
          alert("Adiós, gracias por usar el simulador :)");
        }
      } else {
        alert("Opción no válida, escribe un número entre 1 y 4.");
      }
  
      if (seguir) {
        const otraVez = confirm("¿Quieres hacer otra acción en el simulador?");
        if (!otraVez) {
          seguir = false;
          alert("Simulador terminado por el usuario.");
        }
      }
    }
  }
  
  iniciarSimulador();
  