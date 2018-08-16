const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni'] }
];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Infrno',
    getName: function() {
        setTimeout(() => {
            console.log(this);
        }, 100);
    },
};

console.log(pizza.getName());