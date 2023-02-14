let user = 0;
let pass = 0;
let menu = 0;
let band = 0;
let sector = 0;
let cantidad = 0;
let precio = 0;
let subTotal = [];
let precioFinal = 0;
let parking = 0;
let arrayShop = []
let band1 = 'Imagine Dragons';
let band2 = 'Polo & Pan';
let band3 = 'The Weeknd';
let band4 = 'Cigarrets After Sex';
let band5 = 'Muse';
let band6 = 'Nicolas Jaar';
let band7 = 'Lana del Rey';
let band8 = 'Beach House';
let band9 = 'Nine Inch Nails';
let band10 = 'La Femme';

class Show {
    constructor(band, sector, cantidad, precio) {
        this.band = band
        this.sector = sector
        this.cantidad = cantidad
        this.precio = precio
        this.info = ` Banda: ${band} \n Sector: ${sector} \n Cantidad de entradas: ${cantidad} \n Precio: $${precio} `

    }

}

function logIn() {
    user = prompt('Ingresá tu nombre de usuario').toLocaleLowerCase();
    pass = parseInt(prompt('Ingresa tu contraseña'));

    while (user !== 'emiliano' || pass !== 123) {
        alert('Usuario no registrado, vuelva a intentarlo.');
        logIn();
    }
}



function show() {
    band = parseInt(prompt('Por favor ' + user + ', ingresá el número del evento al que queres ir: \n\n 1 - ' + band1 + ' \n 2 - ' + band2 + ' \n 3 - ' + band3 + '\n 4 - ' + band4 + ' \n 5 - ' + band5 + ' \n 6 - ' + band6 + ' \n 7 - ' + band7 + ' \n 8 - ' + band8 + ' \n 9 - ' + band9 + ' \n 10 - ' + band10));

    while (band < 1 || band > 10) {
        alert('Opción no valida, intente de nuevo');
        show();
    }
}

function campo() {
    sector = prompt('Ingresa a que sector queres ir: \n\n 1 - Campo General \n 2 - Campo VIP');

    while (sector != 1 && sector != 2) {
        alert('Opción no valida, intente de nuevo');
        campo();
    }


}

function entradas() {

    do {
        cantidad = parseInt(prompt('Cuantas entradas para ' + sector + ' queres?'))


    } while (isNaN(cantidad))

}



function costo() {
    if (sector == 'Campo General') {
        precio = 5000 * cantidad;
    } else if (sector == 'Campo VIP') {
        precio = 10000 * cantidad;
    }

}

function buy() {

    show();

    switch (band) {
        case 1:
            band = band1;
            break;
        case 2:
            band = band2;
            break;
        case 3:
            band = band3;
            break;
        case 4:
            band = band4;
            break;
        case 5:
            band = band5;
            break;
        case 6:
            band = band6;
            break;
        case 7:
            band = band7;
            break;
        case 8:
            band = band8;
            break;
        case 9:
            band = band9;
        case 10:
            band = band10;
            break;
    }

    campo();

    if (sector == 1) {
        sector = 'Campo General'
    } else if (sector == 2) {
        sector = 'Campo VIP'
    }

    entradas();

    costo();

    const evento = new Show(band, sector, cantidad, precio);


    alert(evento.info)


    arrayShop.push(evento)
}

function gift() {

    parking = arrayShop.some(evento => evento.sector == 'Campo VIP')

    if (parking) {
        alert(' BENEFICIO EXCLUSIVO \n Por la compra de entradas VIP tenes estacionamiento gratuito.')
        console.log('Estacionamiento gratuito: Si')
    } else {
        console.log('Estacionamiento gratuito: No')

    }
}





function saludar() {

    arrayShop.forEach((evento) => {
        subTotal.push(evento.precio)
    })

    for (let i = 0; i < subTotal.length; i++) {
        precioFinal = precioFinal + subTotal[i]
    }

    console.log('El costo de total de tus entradas es de: $ ' + precioFinal)

    alert('El costo de total de tus entradas es de $' + precioFinal)

    gift()
}


// Inicio del Programa 

logIn();


while (menu != 3) {
    menu = prompt(' 1. Comprar tickets \n 2. Ver Carrito en consola \n 3. Finalizar compra \n')
    if (menu == 1) {
        buy();
    } else if (menu == 2) {
        console.log(arrayShop)
    } else if (menu == 3) {
        saludar();
        alert('Gracias por su visita!')
    } 
}












