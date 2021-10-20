class Producto{
    constructor(name, price, size){
        this.name = name;
        this.price = parseFloat(price);
        this.size = parseInt(size);
    }

    totalPrice(quantity) {
    
        totPrice = parseFloat(this.price) * parseInt(quantity);
        return totPrice;
    
    }
}


let name1;
let drinkSize;
let foodSize;

let price;
let quantity;
let totPrice;

let entryMenu = 0;
entryMenu = prompt("Ingrese el numero indicado para ingresar al menu que quiere ver 1.Bebidas 2.Comidas");
viewMenu(entryMenu);

if (entryMenu <= 2 && entryMenu > 0) {
    pickSize(entryMenu);
    setQty();
    const producto1 = new Producto(name1, parseFloat(price), parseInt(size));
    alert(producto1.name + producto1.price);
    alert("Por favor presione aceptar para ingresar a su carrito de compras y pagar");
    producto1.totalPrice(quantity);
    alert("Por favor ingrese su pago de " + totPrice);
}else{
    viewMenu(entryMenu);
}





function viewMenu(option) {
    option = parseInt(option);
    switch (option) {
        case 1:
            
            alert("Ingresando al menu de Bebidas");
            name1 = prompt("Por favor indique el nombre de la bebida que desea. 1.Agua 2.Gaseosa 3.Cerveza 4.Mojito 5.Vino");
            return name1;
            break;
    
        case 2:
        
            alert("Ingresando al menu de Comidas");
            name1 = prompt("Por favor indique el nombre de comida que desea 1.Hamburguesa completa con papas 2.Papas con cheddar 3.Nachos con cheddar y guacamole");
            return name1;
            break;

        default:
            alert("Ingreso un numero de menu incorrecto");
            break;
    }
}

function pickSize(option) {

    if (option == 1) {
        
        size = prompt("Por favor ingrese el numero indicador del tamaño 1.250ml 2.500ml 3.1L");
        size = parseInt(size);
        switch (size) {
            case 1:
                
                price = 400.05;
                return price;
                break;
        
            case 2:

                price = 550;
                return price;
                break;
            
            case 3:
                price = 670;
                return price;
                break;
        }
        return size;
        
    }else if (option == 2) {
        
        size = prompt("Por favor ingrese el numero indicador del tamaño 1.Pequeño 2.Mediano 3.Grande");
        size = parseInt(size);
        switch (size) {
            case 1:
                
                price = 500;
                return price;
                break;
        
            case 2:

                price = 650;
                return price;
                break;
            
            case 3:
                price = 770;
                return price;
                break;
        }
        return size;
    }
    
}

function setQty() {

    quantity = prompt("Por favor ingrese la cantidad de unidades a comprar");
    return quantity;
    
}

