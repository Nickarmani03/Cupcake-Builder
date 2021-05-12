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
            name: "Vanilla",
            price: 1.75,
        },
        {
            id: 4,
            name: "Chocolate",
            price: 2.50,
        }
    ],
    toppings: [{
        id: 1,
        name: "Sprinkles",
        price: .25,
    },  {
        id: 2,
        name: "Gummy Bears",
        price: .75,
    },
    {
        id: 3,
        name: "M&M's",
        price: .65,
    },
    {
        id: 4,
        name: "Strawberries",
        price: .50,
    }],
    cupcakes: [],
    cupcakeBuilder: {}
}

export const getCakes = () => {
    return [...database.cakeTypes]
} 
//returns a copy of the database section and exports it
export const getFrosting = () => {
    return [...database.frostingFlavors]
} 
export const getToppings = () => {
    return [...database.toppings]
} 

export const setCakeId = (id) => {
    database.cupcakeBuilder.cakeTypeId = id
} //changes the value by assinging a new property where cupcakeBuilder is holding it temporarily

export const setToppingsId = (id) => {
    database.cupcakeBuilder.toppingsTypeId = id
}

export const setFrostingId = (id) => {
    database.cupcakeBuilder.frostingTypeId = id
}