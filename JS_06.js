// Las varaibles tienen que estar dentro de funciones.
// Deben funcionar para múltiples usuarios. Que tengan por lo menos dos commits.

//* Datos de usuarios
const CARDS_CONTAINER = document.querySelector("#card-container");
const USERS = [
     {
        id: 1,
        userNumber: "booklover123",
        description: "Avid reader and coffee enthusiast.",
        age: 29,
        fav_books: {
             books: ["To Kill a Mockingbird", 
             "1984", 
             "Pride and Prejudice"
              ],
        }
    }, 


    {
        id: 2,
        userNumber: "literature_junkie",
        description: "Poetry lover and amateur writer.",
        age: 35,
        fav_books: {
            books: ["The Great Gatsby", 
            "Invisible Man", 
            "Beloved"
             ],
        }
    }
];

//* Creamos la función y las secciones
function cardUser() {
    const cardCollec = {
        name_section: document.createElement("h3"),
        desc_section: document.createElement("p"),
        age_section: document.createElement("p"),
        book_section: document.createElement("div")
    }
    return cardCollec;
}


    //* Crear tarjeta
function insertData(dato, user) {
    const bookList = user.fav_books.books.map((e) => { 
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
    });
    dato.name_section.textContent = user.userNumber;
    dato.desc_section.textContent = user.desc;
    dato.age_section.textContent = user.age;
    dato.book_section.append(...bookList);
    renderCard(dato);
}
   
function renderCard(cardCollec) {
    const card = document.createElement("div");
    card.append(
        cardCollec.name_section, 
        cardCollec.desc_section, 
        cardCollec.age_section, 
        cardCollec.book_section
    );
    card.className = "div-creado";
    CARDS_CONTAINER.appendChild(card);
}

USERS.forEach((user) => {
    const cardDat = cardUser();
    insertData(cardDat, user);
});

