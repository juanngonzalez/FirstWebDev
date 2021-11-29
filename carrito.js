const skates = [
    {
        id: 1,
        nombre: "Skate Element",
        precio: 4000,
        imagen: "./assets/skate 1.jpg"
    },
    {
        id: 2,
        nombre: "Skate Element",
        precio: 4000,
        imagen: "./assets/skate 2.jpg"
    },
    {
        id: 3,
        nombre: "Skate Oxelo",
        precio: 3000,
        imagen: "./assets/skate 3.jpg"
    },
    {
        id: 4,
        nombre: "Tabla Mistery",
        precio: 2000,
        imagen: "./assets/tabla 1.jpg"
    },
    {
        id: 5,
        nombre: "Tabla Element",
        precio: 3000,
        imagen: "./assets/tabla 2.jpg",
    },
    {
        id: 6,
        nombre: "Tabla Element",
        precio: 3000,
        imagen: "./assets/tabla 3.jpg"
    }
]

// const cargarProductos = () => {
//     let contenedor = document.getElementById("carritoDeCompras");
//     contenedor.innerHTML = "";

//     skates.forEach((skate) => {
//         let card = document.createElement("div");
//         card.classList.add("cardigan", "shadowcard", "border", "border-dark", "card", style="width: 13rem;");
//             let html = 
//                         `<img src=${skate.imagen} class="card-img-top border-bottom border-1" alt="tabla de skate">
//                         <div class="card-body">
//                         <p class="card-text">${skate.nombre}</p>
//                         <p class="card-text">$ ${skate.precio}</p>
//                         <button type="button" class="btn btn-dark btn-sm botonM">Comprar</button>
//                         </div>
//                         `;
//             card.innerHTML = html;
//             contenedor.appendChild(card);
//         });
//     };
const cargarProductos = () => {
    let contenedor = document.getElementById("carritoDeCompras");
    contenedor.innerHTML = "";
    
    skates.forEach((skate) => {
        let card = document.createElement("div");
        card.classList.add("cardigan","nuevocarrito", "shadowcard","border", "border-dark", "card");
        let html = `
        <img src="${skate.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${skate.nombre}</h5>
            <p class="card-text">$ ${skate.precio}</p>
            <a href="#" class="btn btn-primary" onClick="abrirCarrito()">COMPRAR</a>
        </div>
        `;
        card.innerHTML = html;
        contenedor.appendChild(card);
    });
};
