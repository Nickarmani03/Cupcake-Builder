const database = {
    cakeTypes: [
        {
            id: 1,
            name: "German Chocolate",
            price: 7.50,
        }, {
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
        }, {
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
    toppings: [
        {
            id: 1,
            name: "Sprinkles",
            price: .25,
        }, {
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
        }
    ],
    cupcakes: [
        {
            id: 2,
            cakeTypeId: 1,
            frostingTypeId: 1,
            toppingsTypeId: 1
        }
    ],
    cupcakeBuilder: {}
}

export const getCupcakes = () => {
    return [...database.cupcakes]
}
export const addCupcake = () => {
    if (
        "toppingsTypeId" in database.cupcakeBuilder &&
        "frostingTypeId" in database.cupcakeBuilder &&
        "cakeTypeId" in database.cupcakeBuilder
        //In operator returns true if these things are IN FACT in the database.cupcakeBuilder, so if nothing is clicked, will return false
    )
    //needs to hold the temporary state of objects into database.cupcakes
    {
        const copyOfCupcakeBuilderObject = { ...database.cupcakeBuilder }//makes a copy. 3 dots is a split operator
        const copyOfCupcakesArray = [...database.cupcakes]
        const cupcakesArrayLength = database.cupcakes.length
        const newCupcakeId = cupcakesArrayLength > 0 //tying to caputure the current length (how many items are in the array)
            ? copyOfCupcakesArray.pop().id + 1
            : 1
        copyOfCupcakeBuilderObject.id = newCupcakeId
        copyOfCupcakeBuilderObject.timestamp = Date.now()
        database.cupcakes.push(copyOfCupcakeBuilderObject)
        database.cupcakeBuilder = {}
        document.dispatchEvent(new CustomEvent("stateHasChanged"))

    }

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

