const database = {
    cakeTypes:[
        {
        id: 1,
        name: "German Chocolate",
        price: 7.50,
    },  {
        id: 2,
        name: "Carrot",
        price: 4.50,
    },
    {
        id: 3,
        name: "Red Velvet",
        price: 3.50,
    },
    {
        id: 4,
        name: "Lemon",
        price: 6.50,
    }
    ],
    frostingFlavors: [
        {
            id: 1,
            name: "Whipped Topping",
            price: 1.50,
        },  {
            id: 2,
            name: "Buttercream",
            price: 1.75,
        },
        {
            id: 3,
            name: "Cinnomin",
            price: .75,
        },
        {
            id: 4,
            name: "Lemon",
            price: .50,
        }
    ],
    toppings: [],
    cupcakes: [],
    cupcakeBuilder: {}
}

export const getCakes = () => {
    return [...database.cakeTypes]
} 
//returns a copy of the database section and exports it