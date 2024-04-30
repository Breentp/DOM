// Las varaibles tienen que estar dentro de funciones.
// Deben funcionar para múltiples usuarios. Que tengan por lo menos dos commits.

//* Datos de usuarios
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

//* Creamos la función
function cardUser(user) {
    const card = document.createElement("div");
    const name_section = document.createElement("h3") 
    const desc_section = document.createElement("p");
    const age_section = document.createElement("p");
    const book_section = document.createElement("div");
    const bookList = user.fav_books.books.map((e) => { 
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
        }
    )

    //* Crear tarjeta
    name_section.textContent = user.userNumber;
    desc_section.textContent = user.desc;
    age_section.textContent = user.age;
    book_section.append(...bookList);
    card.append(name_section, desc_section, age_section, book_section)
    return card;
}
