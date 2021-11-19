let compras = JSON.parse(localStorage.getItem('carrito'));
let totalPrecio = 0;
let contCant = 0;

for (const prod of compras){

    $("#listaCarrito").append(`

        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div><h4>${prod.nombre}</h4></div>
            <span class="badge bg-primary rounded-pill">$ ${prod.precio}</span>
            <div class="justify-content-end" id="trash-${prod.id}"><span class="trash"><i class="fas fa-trash"></i></span></div>
        </li>

    `);

    totalPrecio += +prod.precio;
    contCant += +1;

    $(`#trash-${prod.id}`).click(()=> {

        deleteItem(prod.id);
    })       
    
}

var elemento = document.getElementById('contItm');
var cantidad = parseFloat(elemento.innerHTML) + contCant;
elemento.innerHTML = cantidad;

$("#total").append(`
    <h2>
        Total $ ${totalPrecio}
    </h2>
`);


const deleteItem = (id) => {
const option = confirm(
"¿Está seguro que quiere eliminar el item seleccionado?"
);
console.log(option);
if (option) {
const newCarr = carrito.filter((el) => el.id !== id);
carrito = newCarr;
localStorage.setItem('carrito',JSON.stringify(carrito));
verCarrito();
}
};