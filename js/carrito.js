let carrito = JSON.parse(localStorage.getItem('carrito'));
let prodElegidos = $("#listaCarrito");
let prodTotal = $("#total");
let totalPrecio = 0;
let contCant = 0;

//Muestra los items del carrito
const verCarrito = () => {

    totalPrecio = 0;
    contCant = 0;
	prodElegidos.html("");
	
    for (const prod of carrito){

        $("#listaCarrito").append(`
    
        <tr>
            <td>${prod.nombre} - ${prod.subtipo} </td>
            <td class="d-flex justify-content-around"> <i onclick=disminuirCantidad(${prod.id})><span role="button" class="fas fa-minus-circle"></span></i>${prod.cantidad}<i onclick=aumentarCantidad(${prod.id})><span role="button" class="fas fa-plus-circle"></span></i></td>
            <td class= "text-center">$ ${prod.precio}</td>
            <td class= "text-center" id="trash-${prod.id}"><span role="button" class="trash"><i class="fas fa-trash"></i></span></td> 
        </tr>
    
        `);
    
        totalPrecio += prod.precio * prod.cantidad;
        contCant += +1;
    
        $(`#trash-${prod.id}`).click(()=> {
    
            deleteItem(prod.id);
        })       
        
    }
}

//Borra los elementos del carrito
const deleteItem = (id) => {

    const option = confirm(
        "¿Está seguro que quiere eliminar el item seleccionado?"
    );

    if (option) {
        const newCarr = carrito.filter((el) => el.id !== id);
        carrito = newCarr;
        prodElegidos.html("");
        localStorage.setItem('carrito',JSON.stringify(carrito));
        contProd();
        contPrec();
        verCarrito();
        
    }
}

//Funcion para incrementar el numero de productos en el carrito(Menu)
const contProd =  () => {

        let carCont = carrito.length;
        var elemento = document.getElementById('contItm');
        elemento.innerHTML = carCont;        
 
}

//Cuenta el total de la compra
const contPrec = () => {

    totalPrecio = 0;
    prodTotal.html("");

    for (const prod of carrito){
        totalPrecio += prod.precio * prod.cantidad;
    }

    $("#total").append(`
        <h2>
            Total $ ${totalPrecio}
        </h2>
    `);

}

//FUNCIÓN DISMINUIR CANTIDAD 
function disminuirCantidad(id) {

    const index = carrito.findIndex(item => item.id === id);

    if (carrito[index].cantidad === 1) {
        deleteItem(id);
      }
      else {
        carrito[index].cantidad = carrito[index].cantidad - 1;
        contPrec();
        verCarrito();
        localStorage.setItem('carrito', JSON.stringify(carrito));
      }
  }
  
  //FUNCIÓN AUMENTAR CANTIDAD 
  function aumentarCantidad(id) {

    const index = carrito.findIndex(item => item.id === id);
    carrito[index].cantidad = carrito[index].cantidad + 1;
    contPrec();
    verCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }