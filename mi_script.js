const compras=[]

function AgregoCarrito(){
    let compra={
        modelo:document.getElementById("modelo1").textContent,
        precio:document.getElementById("precio1").textContent
    }
    compras.push(compra);
    mostrarEnCarrito(compra);
}
function AgregoCarrito2(){
    let compra={
        modelo:document.getElementById("modelo2").textContent,
        precio:document.getElementById("precio2").textContent
    }
    compras.push(compra);
    mostrarEnCarrito(compra);
}
function AgregoCarrito3(){
    let compra={
        modelo:document.getElementById("modelo3").textContent,
        precio:document.getElementById("precio3").textContent
    }
    compras.push(compra);
    mostrarEnCarrito(compra);
}
function mostrarEnCarrito(item) {
    const listaCarrito = document.getElementById("listaCarrito");
    const li = document.createElement("li");
    li.textContent = `${item.modelo} - ${item.precio}`;
    listaCarrito.appendChild(li);
  }

