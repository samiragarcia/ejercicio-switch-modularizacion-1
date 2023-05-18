const pPrecioTotal = document.querySelector("#precio-total");
const selectCantidad = document.querySelector("select");
const olCarrito = document.querySelector("#carrito");
const fsContenedorProducto = document.querySelector("#contenedor-procuto");

const PRECIO_PROD_1 = 500;
const NOMBRE_PROD_1 = "Pan";

const PRECIO_PROD_2 = 200;
const NOMBRE_PROD_2 = "Factura";

let precioProductoActual = PRECIO_PROD_1;
let nombreProductoActual = NOMBRE_PROD_1;

let precioTotal = 0;

function agregarProducto(){
    precioTotal = (precioProductoActual * selectCantidad.value) + precioTotal;
    pPrecioTotal.innerHTML = "Total: $" + (precioTotal);
    olCarrito.innerHTML += `<li> ${nombreProductoActual} (${selectCantidad.value})`
}

function pasarProducto(){
    fsContenedorProducto.innerHTML = `
        <img src="https://vinomanos.com/wp-content/uploads/2020/04/Facturas-de-panaderia-copia.jpg" alt="">
        <p>factura</p>
        <p>Precio: $200</p>
    `;
    precioProductoActual = PRECIO_PROD_2;
    nombreProductoActual = NOMBRE_PROD_2;
}