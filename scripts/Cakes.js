import { getCakes, setCakeId } from "./database.js"
// generates the html representation for each cake object

const cakes = getCakes()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "cakeObject") { // check if the name attribute is 'cakeObject'
            // if it IS 'cakeObject', then we capture the value of the 'value' attribute
            const cakeObjectId = parseInt(changeEvent.target.value) // parseInt to change the string to an integer
            //  the value is listed below and it is the value of the id. the id is set on the database page and hold it termporarily.
            setCakeId(cakeObjectId) // invoke setcakeObject to store the cakeObj id in temporary state
        }
    }
)

// Generate HTML representations of each cake object
export const Cakes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const cakeAsHTML = cakes.map(   // iterates the array as a parameter of the function. returns an array of strings in a different format
        (cakeObject) => { // invoke a function for each cake object
            // that converts each cake object into an HTML representation of that cake object
            return `
                <li> 
            <input type="radio" name="cakeObject" value="${cakeObject.id}" /> ${cakeObject.name}
            </li>`
        }// the name shopws that they are grouped together
        //the value is unique so we use id that the user selected. it is extracted
    )
    const singleStringOfHTML = cakeAsHTML.join("")
    // join all strings in array into one single string it is a method


    html += singleStringOfHTML  // append single string of html to the current value of html variable  
    html += "</ul>" //appends it to the html tag

    return html
}