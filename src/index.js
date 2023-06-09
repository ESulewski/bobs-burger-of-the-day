function displayBurger(){
let burgerElement = document.querySelector("#day-burger");

    let burgers = [
       "Ruta-Bag-A Burger",
       "The Troy Oinkman Burger <br> (served with bacon)",
        "Romaines of the Day Burger",
        "50 Ways to Leave Your Guava Burger",
        "Sharp Cheddar Dressed Man Burger <br> (comes with sharp cheddar)",
        "Summer Thyme Burger",
        "Peas and Thank You Burger",
        "The Troy Oinkman Burger <br> (served with bacon)",
        "Yes I Cayenne Burger",
        "Onion Burger - Grilled <br>....To Death!",
        "Bean Spirit <br> (comes with beans)",
        "Tunami",
        "I Mint to Do That Burger <br> (comes with mint relish)",
        "Sub-Conscious Burger <br> (on a sub roll)",
        "Sweet Home Avocado Burger",
        "Is This Your Chard Burger",
        "I Am Mad About Saffron <br> (made with no saffron)",
        "It's Only Sourdough Burger <br> (But I Like It)",
        "Burger a la Mode <br> (comes with ice cream, not on top)",
        "Do Brussel Burger <br> (comes with Brussels sprouts)",
        "One Fish, Two Fish, Red Fish Hamburger",
        "Grandpa Muenster Burger",
        "Take Me Out to the Burger <br> (comes with peanuts & Cracker Jacks)",
    ]
    let special = burgers[Math.floor(Math.random()* burgers.length)];
    burgerElement.innerHTML = special, burgers[random];
}

displayBurger();
