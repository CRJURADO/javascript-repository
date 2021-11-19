$.get( "./js/productos.json", data => {

    //array para contener los productos elegidos
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    //Funcion para incrementar el numero de productos en el carrito
	const prodElegidos =  idProducto => {
        $(`.prod-${idProducto}`).click( () => {

            var elemento = document.getElementById('contItm');
			var cantidad = parseFloat(elemento.innerHTML) + 1;
			elemento.innerHTML = cantidad;
			agregarProd(idProducto);        
			
        })
    }

    //Funcion para mostrar el menu
    for (const producto of data.productos){

        $("#fila").append(`

            <div class="col-sm-4 my-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text"><strong>$ ${producto.precio}</strong></p>
                        <a href="#" class="btn btn-primary prod-${producto.id}">Comprar</a>
                    </div>
                </div>
            </div>
                
        `);
        prodElegidos(producto.id);
        
    }

    //Funcion para agregar productos al carrito
    const agregarProd = (idProducto) => {
        //buscar en el arreglo de productos el producto que compro
        let productoComprado = data.productos.find(x=>x.id ==idProducto);
        carrito.push(productoComprado);
        localStorage.setItem('carrito',JSON.stringify(carrito));
    }
    
})

    