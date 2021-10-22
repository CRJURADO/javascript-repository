//Armado de objeto con su metodo que sirve de funcion principal de la aplicacion
class Producto{
    constructor(name, price, size){
        this.name = name;
        this.price = price;
        this.size = size;
    }

    totalPrice(quantity) {
    
        totPrice = parseFloat(this.price) * parseInt(quantity);
        return totPrice;
    
    }
}

//Variables globales
let name1;
let price;
let size;
let quantity;
let totPrice;
let entryMenu;

//Primer llamado de la aplicacion
entryMenu = prompt("Ingrese el numero indicado para ingresar al menu que quiere ver 1.Bebidas 2.Comidas");
viewMenu(entryMenu);

//Ingreso al funcionamiento gral
if (entryMenu <= 2 && entryMenu > 0) {

    pickSize(entryMenu); //eleccion de tamaño
    setQty();//Eleccion de cantidad
    alert(name1 + price);//Aviso de nombre y precio del producto unitario
    //Creacion del objeto producto
    const producto1 = new Producto(name1, price, size);
    alert(producto1.name + producto1.price);
    //Calculo del total de la compra y se muestra al usuario con un alert
    alert("Por favor presione aceptar para ingresar a su carrito de compras y pagar");
    producto1.totalPrice(quantity);
    alert("Por favor ingrese su pago de " + totPrice);
}else{
    viewMenu(entryMenu);
}

//Funciones utilizadas en la aplicacion
function viewMenu(option) {
    option = parseInt(option);
    switch (option) {
        case 1:
            
            //Variables locales
            const drinkArray = ["Agua", "Gaseosa", "Cerveza", "Mojito", "Vino"];
            const productosDrinks = [{name: "Agua" , price: 250, size: 1},
                                     {name: "Mojito" , price: 450, size: 1},
                                     {name: "Gaseosa" , price: 325, size: 1},
                                     {name: "Vino" , price: 470, size: 1},
                                     {name: "Cerveza" , price: 400, size: 1}
                                    ];

            alert("Ingresando al menu de Bebidas");
            
            let seePrices = prompt("Elija el numero que indique si quiere ver la lista de precios de 1.mas barato a mas caro o 2.de mas caro a mas barato");
            arrangePrices(seePrices, productosDrinks);
            alert(JSON.stringify(productosDrinks, "", 2));
            
            name1 = prompt("Por favor indique el nombre de la bebida que desea.  " + drinkArray.toString());
            return name1;
            break;
    
        case 2:
            
            //Variables locales
            const foodArray = ["Hamburguesa completa con papas", "Papas con cheddar", "Nachos con cheddar"];
            const productosFoods =  [{name: "Hamburguesa completa con papas", price: 550, size: 1},
                                     {name: "Papas con cheddar", price: 500, size: 1},
                                     {name: "Nachos con cheddar", price: 470, size: 1}];

            alert("Ingresando al menu de Comidas");
            
            let seePrices = prompt("Elija el numero que indique si quiere ver la lista de precios de 1.mas barato a mas caro o 2.de mas caro a mas barato");
            arrangePrices(seePrices, productosFoods);
            alert(JSON.stringify(productosFoods, "", 2));
            
            name1 = prompt("Por favor indique el nombre de comida que desea  " + foodArray.toString());
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
        
        let size = prompt("Por favor ingrese el numero indicador del tamaño 1.Pequeño 2.Mediano 3.Grande");
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

function arrangePrices(seePrices, products) {
    
    if (seePrices == 1) {
        products.sort((a, b) => a.price - b.price);
    }else{
        products.sort((a, b) => b.price - a.price );
    }
}


