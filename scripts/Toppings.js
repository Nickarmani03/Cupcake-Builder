import { getToppings, setToppingsId } from "./database.js"
// generates the html representation for each cake object

const topping = getToppings()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "toppingObject"){ // check if the name attribute is 'toppingObject'
            // if it IS 'toppingObject', then we capture the value of the 'value' attribute
            const toppingObjectId = parseInt(changeEvent.target.value) // parseInt to change the string to an integer
            //  the value is listed below and it is the value of the id. the id is set on the database page and hold it termporarily.
            setToppingsId(toppingObjectId) // invoke settoppingObject to store the cakeObj id in temporary state
        }
    }
)

// Generate HTML representations of each cake object
export const Toppings = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const toppingAsHTML = topping.map(   // iterates the array as a parameter of the function. returns an array of strings in a different format
        (toppingObject) => { // invoke a function for each cake object
            // that converts each cake object into an HTML representation of that cake object
            return `
                <li> 
            <input type="radio" name="toppingObject" value="${toppingObject.id}" /> ${toppingObject.name}
            </li>`
        }// the name shopws that they are grouped together
        //the value is unique so we use id that the user selected. it is extracted
    )
    const singleStringOfHTML = toppingAsHTML.join("")
     // join all strings in array into one single string it is a method

   
    html += singleStringOfHTML  // append single string of html to the current value of html variable  
    html += "</ul>" //appends it to the html tag

    return html
}