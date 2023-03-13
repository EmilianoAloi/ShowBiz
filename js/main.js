import { shows } from './objets.js'

let shop = []
let showSelected = []
let numberTickets = ''



/*Tarjetas de shows dinamicas  */

const gridShows = document.querySelector('#gridShows');


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






/* Modal de seleccion de tickets */


const buyButtons = document.querySelectorAll('.btn-show');
buyButtons.forEach(btn => {

    btn.addEventListener('click', (e) => {
        showSelected = shows.filter(show => show.id === e.currentTarget.id);

        const modalShow = document.querySelector('.modal-body')
        showSelected.forEach((show) => {
            modalShow.innerHTML = `
                <div class="container">
                    <h3 class='ticket__band'>${show.band}</h3>
                    <div class=' containerTicket d-flex align-items-center justify-content-around'>
                    <img src='${show.img}' class='imgModal mt-4'> 
                        <div class='ticket__info'>
                        <h2 class='align-self-start '> Información general </h2>
                            <h4>Ciudad: ${show.city}</h4>
                            <h4>Direccion: ${show.adress}</h4>
                            <h4>Fecha: ${show.date}</h4>
                            <h4>Hora: ${show.eventTime}</h4>
                            <h4>Direccion: ${show.adress}</h4>
                            <h4>Estadio: ${show.location}</h4>
                        </div>
                    </div>
                </div>
                
                <form>
                <div class="typeTickets d-flex  container justify-content-betwen mt-4 mb-5">
                    <button type="button" class="btn btn-dark btnTicket">UBICACION</button>
                    <div class="custom-select">
                        <select id="sector-select"  class="sector-select" name="" >
                            <option value="Campo General">Campo General: $5.000</option>
                            <option value="Campo VIP">Campo VIP: $10.000</option>
                        </select>
                    </div>
                    <button type="button" class="btn btn-dark btnTicket">CANTIDAD</button>
                    <div class="custom-select">
                        <select id='qty-select' class="sector-select" name="qty" >
                            <option value="1">1 entrada</option>
                            <option value="2">2 entradas</option>
                            <option value="3">3 entradas</option>
                            <option value="4">4 entradas</option>
                        </select>
                    </div>
                    <button type="button" id = 'buyTicket' class="buyTicket btn btn-dark btnTicket" data-bs-dismiss="modal" >COMPRAR TICKETS</button>
                </div>
                </form>
            `

            /* Agregar al carrito Ticket seleccionado */

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

                shop.push(show);
                numberShop();

                /* guardar carrito en localstorage */

                const shopJSON = JSON.stringify(shop);
                localStorage.setItem('Seleccion de Tickets', shopJSON);



                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
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

/* Actualizar numero en Carrito */

const qtyTickets = document.querySelector('#qtyTickets');
document.getElementById('qtyTickets').innerText =  localStorage.getItem('Numero de Tickets')


function numberShop() {

    numberTickets = shop.length;
    qtyTickets.innerText = numberTickets;
    localStorage.setItem('Numero de Tickets', numberTickets);
}



/* Carrito */


let modalShop = document.querySelector('.modal-container ');


cart.addEventListener('click', () => {
    modalShop.innerHTML = '';



    if (shop == '') {
        const shopLs = localStorage.getItem('Seleccion de Tickets');
        let shopObjet = JSON.parse(shopLs);
        shop = shopObjet;
    }


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






