function displayBurger(){
let burgerElement = document.querySelector("#day-burger");

    let burgers = [
       "Ruta-Bag-A Burger",
        "Romaines of the Day Burger",
        "50 Ways to Leave Your Guava Burger",
        "Summer Thyme Burger",
        "Peas and Thank You Burger",
        "Yes I Cayenne Burger"
    ]
    let special = burgers[Math.floor(Math.random()* burgers.length)];
    burgerElement.innerHTML = special, burgers[random];
}
displayBurger();

