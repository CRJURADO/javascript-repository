const productos = [{id:1, nombre:'Agua', descripcion:'Botella de 500ml', precio:'120'},
                   {id:2, nombre:'Gaseosa', descripcion:'Botella de 500ml', precio:'220'},
                   {id:3, nombre:'Cerveza', descripcion:'Patagonia lager porron ', precio:'290'},
                   {id:4, nombre:'Mojito', descripcion:'Ingredientes Ron, lima, azucar y menta en un vaso largo', precio:'560'},
                   {id:5, nombre:'Papas FullDeveloper', descripcion:'Papas con cheddar, bacon, salchichas, 2 huevo fritos y cebolla de verdeo', precio:'868'},
                   {id:6, nombre:'Hamburguesa h4', descripcion:'Simple con doble cheddar, viene con papas fritas', precio:'790'}];

//Funcion para mostrar el menu
const mostrarMenu = () => {

    for (const producto of productos){

        $("#fila").append(`

            <div class="col-sm-4 my-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text"><strong>$ ${producto.precio}</strong></p>
                        <a href="#" class="btn btn-primary" onclick=prodElegidos(${producto.id})>Comprar</a>
                    </div>
                </div>
            </div>
                
        `);
        
    }
}

//Funcion para incrementar el numero de productos en el carrito
const prodElegidos = (idProducto) => {

    var elemento = document.getElementById('contItm');
    var cantidad = parseFloat(elemento.innerHTML) + 1;
    elemento.innerHTML = cantidad;
    agregarProd(idProducto);
}


//array para contener los productos elegidos
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Funcion para agregar productos al carrito
const agregarProd = (idProducto) => {
    //buscar en el arreglo de productos el producto que compro
    let productoComprado = productos.find(x=>x.id ==idProducto);
    carrito.push(productoComprado);
    localStorage.setItem('carrito',JSON.stringify(carrito));
}

const verCarrito = () => {
    debugger;
    //dibuje un un div todos los productos
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

}

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