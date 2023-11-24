let compras=[]


function AgregoCarrito(numero) {
    let compra = {
        modelo: document.getElementById("modelo" + numero).textContent,
        precio: document.getElementById("precio" + numero).textContent
    };
    compras.push(compra);
    mostrarEnCarrito(compra);
}


function mostrarEnCarrito(item) {
    const tablaCarrito = document.getElementById("tablaCarrito");
    const fila = tablaCarrito.insertRow();
    const celdaModelo = fila.insertCell(0);
    const celdaPrecio = fila.insertCell(1);
    celdaModelo.textContent = item.modelo;
    celdaPrecio.textContent = item.precio;

     actualizarTotal();
}

function actualizarTotal() {
    const tablaCarrito = document.getElementById("tablaCarrito");
    const totalElement = document.getElementById("totalCarrito");

    let total = 0;
    for (let i = 0; i < tablaCarrito.rows.length; i++) {
        const precioTexto = tablaCarrito.rows[i].cells[1].textContent.trim();
        const precioNumerico = parseFloat(precioTexto.replace('$', '').replace(',', ''));
        total += precioNumerico;
        
    }

   
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}


function vaciarCarrito() {
    compras = []; 
    const tablaCarrito = document.getElementById("tablaCarrito");
    while (tablaCarrito.rows.length > 0) {
        tablaCarrito.deleteRow(0);
    }
    actualizarTotal();
}
