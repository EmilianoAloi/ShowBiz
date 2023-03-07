import { shows } from './objets.js'

let shop = []
let showSelected = []



const gridShows = document.querySelector('#gridShows');

function displayShows() {

    shows.forEach(show => {

        const article = document.createElement('article')
        article.classList.add('col-12');
        article.classList.add('col-sm-3');
        article.classList.add('card');
        article.classList.add('mb-4');

        article.innerHTML = `
    <img src="${show.img}" class="card-img-top mt-3" alt="${show.band}">
    <div class="card-body d-flex flex-column align-items-center">
        <h5 class="card-title">${show.band}</h5>
        <p class="card-text">${show.date} - ${show.location}</p>
        <button id = '${show.id}' class="btn btn-dark btn-show" data-bs-toggle="modal" data-bs-target="#staticBackdrop">COMPRAR TICKETS</button>
    </div>
        `
        gridShows.append(article);
    })
}

function ticketSelection() {
    let sectorSelect = document.getElementById('sector-select').value;
    let qtySelected = document.getElementById('qty-select').value;

    showSelected.forEach(show => {
        show.sector = sectorSelect
        show.quantity = qtySelected
    })
    shop.push(show)
    console.log(shop)
}

displayShows();

const buyButtons = document.querySelectorAll('.btn-show');
buyButtons.forEach(btn => {

    btn.addEventListener('click', (e) => {
        showSelected = shows.filter(show => show.id === e.currentTarget.id);

        const modalShow = document.querySelector('.modal-body')
        showSelected.forEach((show) => {
            modalShow.innerHTML = `
                <div class="container">
                    <h3>${show.band}</h3>
                    <div class='d-flex align-items-center justify-content-around'>
                    <img src='${show.img}' class='imgModal mt-4'> 
                        <div>
                            <h4>Ciudad: ${show.city}</h4>
                            <h4>Ciudad: ${show.adress}</h4>
                            <h4>Fecha: ${show.date}</h4>
                            <h4>Hora: ${show.eventTime}</h4>
                            <h4>Direccion: ${show.adress}</h4>
                            <h4>Estadio: ${show.location}</h4>
                        </div>
                    </div>
                </div>
                
                <form>
                <div class="typeTickets d-flex  container justify-content-betwen mt-5 mb-5">
                
                    <button type="button" class="btn btn-dark">UBICACION</button>

                    <div class="custom-select">
                        <select id="sector-select"  class="sector-select" name="" >
                            <option value="Campo General">Campo General: $5.000</option>
                            <option value="Campo VIP">Campo VIP: $10.000</option>
                        </select>
                    </div>

                    <button type="button" class="btn btn-dark">CANTIDAD</button>
                
                    <div class="custom-select">
                        <select id='qty-select' class="sector-select" name="qty" >
                            <option value="1">1 entrada</option>
                            <option value="2">2 entradas</option>
                            <option value="3">3 entradas</option>
                            <option value="4">4 entradas</option>
                        </select>
                    </div>

                    <button type="button" class="buyTicket btn btn-dark" data-bs-dismiss="modal" >COMPRAR TICKETS</button>
                    
                </div>
                </form>
            `

            function ticketSelection() {

                let sectorSelect = document.getElementById('sector-select').value;
                let qtySelected = document.getElementById('qty-select').value;

                showSelected.forEach(show => {
                    show.sector = sectorSelect
                    show.quantity = qtySelected

                    if (sectorSelect == 'Campo General') {
                        show.price = 5000
                    } else if (sectorSelect == 'Campo VIP') {
                        show.price = 10000
                    }

                    show.subtotal = show.quantity * show.price
                })




                shop.push(show)
                console.log(shop)
                numberShop();

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Tickets agregados al Carrito'
                })
            }

            let ticketSelected = document.querySelector('.buyTicket');
            ticketSelected.addEventListener('click', () => {
                ticketSelection();
            })
        })
    })
})

const qtyTickets = document.querySelector('#qtyTickets');


function numberShop() {

    let numberTickets = shop.length
    qtyTickets.innerText = numberTickets;
    console.log(numberTickets)

}



let modalShop = document.querySelector('.modal-container ')


cart.addEventListener('click', () => {

    modalShop.innerHTML = '',

        shop.forEach((show) => {

            let div = document.createElement('div');
            div.classList.add('showShop');
            div.classList.add('container');
            div.classList.add('d-flex');
            div.classList.add('align-items-center');
            div.classList.add('gap-5');
            div.classList.add('pt-2');


            div.innerHTML = `
    
    <img class="imgShop" src="${show.img}" alt="Agar Agar">
    <div class="infoShop bandShop d-flex flex-column mt-2 mb-5">
        <h4 class="pb-4 pt-1 pe-4">SHOW</h4>
        <h5>${show.band}</h5>
    </div>
    <div class="infoShop d-flex flex-column mb-5 ">
        <h4 class="pb-4 pt-1 pe-4">UBICACION</h4>
        <h5>${show.sector}</h5>
    </div>
    <div class="infoShop d-flex flex-column mb-5 ">
        <h4 class="pb-4 pt-1 pe-4">CANTIDAD</h4>
        <h5>${show.quantity}</h5>
    </div>
    <div class="infoShop d-flex flex-column mb-5 ">
        <h4 class="pb-4 pt-1 pe-4">PRECIO </h4>
        <h5>$${show.price}</h5>
    </div>
    <div class="infoShop d-flex flex-column mb-5 ms-4">
        <h4 class="pb-4 pt-1 pe-4">SUBTOTAL</h4>
        <h5>$${show.subtotal}</h5>
    </div>
        `;



            modalShop.append(div);



        });

});



/*

    shop.forEach((tickets) => {

        let div = document.createElement('div');
        div.classList.add('showShop');
        div.classList.add('container');
        div.classList.add('d-flex');
        div.classList.add('align-items-center');
        div.classList.add('gap-5');
        div.classList.add('pt-2');

        div.innerHTML = `
    
    <img class="imgShop" src="${show.img}" alt="Agar Agar">
    <div class="infoShop d-flex flex-column mb-5">
        <h4 class="pb-4 pt-1 pe-4">SHOW</h4>
        <h5>${show.band}</h5>
    </div>
    <div class="infoShop d-flex flex-column mb-5 ">
        <h4 class="pb-4 pt-1 pe-4">UBICACION</h4>
        <h5>${show.sector}</h5>
    </div>
    <div class="infoShop d-flex flex-column mb-5 ">
        <h4 class="pb-4 pt-1 pe-4">CANTIDAD</h4>
        <h5>${show.quantity}</h5>
    </div>
    <div class="infoShop d-flex flex-column mb-5 ">
        <h4 class="pb-4 pt-1 pe-4">PRECIO </h4>
        <h5>${show.eventTime}</h5>
    </div>
    <div class="infoShop d-flex flex-column mb-5 ms-4">
        <h4 class="pb-4 pt-1 pe-4">SUBTOTAL</h4>
        <h5>${show.eventTime}</h5>
    </div>
        `;



        modalShop.append(div);



    });





/*

 const modalShop = document.getElementById('#modalBody-container')

cart.addEventListener('click', (e) => {

    shop.forEach((show) => {
        const div = document.createElement('div')
        div.classList.add('showShop')
        div.classList.add('container')
        div.classList.add('d-flex')
        div.classList.add('align-items-center')
        div.classList.add('gap-5')
        div.classList.add('pt-2')
        div.innerHTML = `
                            <img class="imgShop" src="${show.img}" alt="Agar Agar">
                            <div class="infoShop d-flex flex-column mb-5">
                                <h4 class="pb-4 pt-1 pe-4">SHOW</h4>
                                <h5>${show.band}</h5>
                            </div>
                            <div class="infoShop d-flex flex-column mb-5 ">
                                <h4 class="pb-4 pt-1 pe-4">UBICACION</h4>
                                <h5>${show.sector}</h5>
                            </div>
                            <div class="infoShop d-flex flex-column mb-5 ">
                                <h4 class="pb-4 pt-1 pe-4">CANTIDAD</h4>
                                <h5>${show.quantity}</h5>
                            </div>
                            <div class="infoShop d-flex flex-column mb-5 ">
                                <h4 class="pb-4 pt-1 pe-4">PRECIO </h4>
                                <h5>${show.eventTime}</h5>
                            </div>
                            <div class="infoShop d-flex flex-column mb-5 ms-4">
                                <h4 class="pb-4 pt-1 pe-4">SUBTOTAL</h4>
                                <h5>${show.eventTime}</h5>
                            </div>
`
        cart.append(div);
    })
})



*/

















/*

showShop container d-flex align-items-center gap-5 pt-2


shows.forEach(show => {

    const article = document.createElement('article')
    article.classList.add('col-12');
    article.classList.add('col-sm-3');
    article.classList.add('card');
    article.classList.add('mb-4');

    article.innerHTML = `
<img src="${show.img}" class="card-img-top mt-3" alt="${show.band}">
<div class="card-body d-flex flex-column align-items-center">
    <h5 class="card-title">${show.band}</h5>
    <p class="card-text">${show.date} - ${show.location}</p>
    <button id = '${show.id}' class="btn btn-dark btn-show" data-bs-toggle="modal" data-bs-target="#staticBackdrop">COMPRAR TICKETS</button>
</div>
    `
    gridShows.append(article);
})



*/












/*
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
let arrayShop = [];
let payment = 0;
let arrayCash = [];
let arrayCard = [];
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
    constructor(band, sector, cantidad, precio, payment) {
        this.band = band;
        this.sector = sector;
        this.cantidad = cantidad;
        this.precio = precio;
        this.payment = payment;
        this.info = ` Banda: ${band} \n Sector: ${sector} \n Cantidad de entradas: ${cantidad} \n Precio: $${precio} \n ${payment} `;
    }
}
function logIn() {
    user = prompt('Ingresá tu nombre de usuario:').toLocaleLowerCase();
    pass = parseInt(prompt('Ingresá tu contraseña'));
    while (user !== 'emiliano' || pass !== 123) {
        alert('Usuario no registrado, vuelva a intentarlo.');
        logIn();
    }
}
function buy() {
    do {
        band = parseInt(prompt('Por favor ' + user + ', ingresá el número del evento al que queres ir: \n\n 1 - ' + band1 + ' \n 2 - ' + band2 + ' \n 3 - ' + band3 + '\n 4 - ' + band4 + ' \n 5 - ' + band5 + ' \n 6 - ' + band6 + ' \n 7 - ' + band7 + ' \n 8 - ' + band8 + ' \n 9 - ' + band9 + ' \n 10 - ' + band10));
    } while (band < 1 || band > 10 || (isNaN(band)));
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
            break;
        case 10:
            band = band10;
            break;
    }
    do {
        sector = prompt('Ingresá a que sector queres ir: \n\n 1 - Campo General \n 2 - Campo VIP');
    } while (sector != 1 && sector != 2 || (isNaN(sector)));
    if (sector == 1) {
        sector = 'Campo General';
    } else if (sector == 2) {
        sector = 'Campo VIP';
    }
    do {
        cantidad = parseInt(prompt('Cuantas entradas para ' + sector + ' queres?'));
    } while (isNaN(cantidad));
    if (sector == 'Campo General') {
        precio = 5000 * cantidad;
    } else if (sector == 'Campo VIP') {
        precio = 10000 * cantidad;
    }
    do {
        payment = parseInt(prompt('Elegí el número de la opción deseada: \n 1. Pago en efectivo \n 2. Pago en 3 cuotas sin interés con tarjeta Visa o Mastercard'));
    } while (isNaN(payment) || payment != 1 && payment != 2);
    switch (payment) {
        case 1:
            payment = 'Efectivo';
            break;
        case 2:
            payment = 'Tarjeta';
            break;
    }
    const evento = new Show(band, sector, cantidad, precio, payment);
    alert(evento.info);
    arrayShop.push(evento);
}
function gift() {
    parking = arrayShop.find(evento => evento.sector == 'Campo VIP');
    if (parking) {
        alert('BENEFICIO EXCLUSIVO \nPor la compra de entradas VIP, Te regalamos el acceso exclusivo al Estacionamiento y aplica para todos los eventos.');
        console.log('Estacionamiento gratuito: Si');
    } else {
        console.log('Estacionamiento gratuito: No');
    }
}
// Inicio del Programa 
logIn();
while (menu != 3) {
    menu = prompt('Elegí el número de la opción deseada: \n \n 1. Comprar tickets \n 2. Ver Carrito \n 3. Finalizar compra \n');
    if (menu == 1) {
        buy();
    } else if (menu == 2) {
        arrayShop.find(evento => {
            alert(evento.info);
        })
        console.log('    ShoWbiz  ===============================================');
        console.log(' DETALLE DE TICKETS Y EVENTOS CARGADOS\n   (Disponible explorando Array)  ');
        console.log(arrayShop);
    } else if (menu == 3) {
        arrayShop.forEach((evento) => {
            subTotal.push(evento.precio)
        });
        for (let i = 0; i < subTotal.length; i++) {
            precioFinal = precioFinal + subTotal[i];
        };
        arrayCard = arrayShop.filter((evento) => evento.payment == 'Tarjeta');
        arrayCash = arrayShop.filter((evento) => evento.payment == 'Efectivo');
        alert('PRECIO FINAL A PAGAR: $' + precioFinal);
        console.log('Monto total abonado: ' + precioFinal);
        gift();
        console.log('===============================================');
        console.log('Eventos cobrados en efectivo: \n Ver detalles en Array');
        console.log(arrayCash);
        console.log('Eventos cobrados en tarjeta: \n Ver detalles en Array ');
        console.log(arrayCard);
        console.log('===============================================');
        alert('MUCHAS GRACIAS POR SU COMPRA, HASTA PRONTO !');
    }
}
*/