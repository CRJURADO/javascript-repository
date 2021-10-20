let drinkName;
let drinkSize;

let foodName;
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
    alert(price + " " + quantity);
    alert("Por favor presione aceptar para ingresar a su carrito de compras y pagar");
    alert("Por favor ingrese su pago de " + totPrice);
}else{
    viewMenu(entryMenu);
}





function viewMenu(option) {
    option = parseInt(option);
    switch (option) {
        case 1:
            
            alert("Ingresando al menu de Bebidas");
            drinkName = prompt("Por favor indique el numero de la bebida que desea. 1.Agua 2.Gaseosa 3.Cerveza 4.Mojito 5.Vino");
            return drinkName;
            break;
    
        case 2:
        
            alert("Ingresando al menu de Comidas");
            foodName = prompt("Por favor indique el numero de comida que desea 1.HAmburguesa completa con papas 2.Papas con cheddar 3.Nachos con cheddar y guacamole");
            return foodName;
            break;

        default:
            alert("Ingreso un numero de menu incorrecto");
            break;
    }
}

function pickSize(option) {

    if (option == 1) {
        
        drinkSize = prompt("Por favor ingrese el numero indicador del tamaño 1.250ml 2.500ml 3.1L");
        drinkSize = parseInt(drinkSize);
        switch (drinkSize) {
            case 1:
                
                price = 400;
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
        return drinkSize;
        
    }else if (option == 2) {
        
        foodSize = prompt("Por favor ingrese el numero indicador del tamaño 1.Pequeño 2.Mediano 3.Grande");
        foodSize = parseInt(foodSize);
        switch (foodSize) {
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
        return foodSize;
    }
    
}

function setQty() {

    quantity = prompt("Por favor ingrese la cantidad de unidades a comprar");
    return quantity;
    
} 

function totalPrice(price, quantity) {
    
    totPrice = parseInt(price) * parseInt(quantity);
    return totPrice;

}

