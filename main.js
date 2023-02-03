let user = 0;
let pass = 0;
let contador = 1;
let band = 0;
let sector = 0;
let cantidad = 0;
let band1 = 'Imagine Dragons'
let band2 = 'Polo & Pan'
let band3 = 'The Weeknd'
let band4 = 'Cigarrets After Sex'
let band5 = 'Muse'
let band6 = 'Nicolas Jaar'
let band7 = 'Lana del Rey'
let band8 = 'Beach House'
let band9 = 'Nine Inch Nails'
let band10 = 'La Femme'

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

function ticket() {
    cantidad = prompt('Cuantas entradas para ' + sector + ' queres?');
    alert('Elegiste ' + cantidad + ' entradas ' + sector + ' para ir a ver a ' + band);
}

function pagar() {
    if (sector == 'Campo General') {
        let campoGeneral = 5000 * cantidad;
        alert('El costo total de tus entradas es de $' + campoGeneral);
    } else if (sector == 'Campo VIP') {
        let campoVip = 10000 * cantidad;
        alert('El costo total de tus entradas es de $' + campoVip);
    }
}


// Inicio del Programa 

logIn();

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
    default:
        band = 'Opción incorrecta'
        break;
}

campo();

if (sector == 1) {
    sector = 'Campo General'
} else if (sector == 2) {
    sector = 'Campo VIP'
}

ticket();

pagar();


