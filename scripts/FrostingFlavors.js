import { getFrosting, setFrostingId } from "./database.js"
// generates the html representation for each cake object

const frosting = getFrosting()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "frostingObject"){ // check if the name attribute is 'frostingObject'
            // if it IS 'frostingObject', then we capture the value of the 'value' attribute
            const frostingObjectId = parseInt(changeEvent.target.value) // parseInt to change the string to an integer
            //  the value is listed below and it is the value of the id. the id is set on the database page and hold it termporarily.
            setFrostingId(frostingObjectId) // invoke setfrostingObject to store the cakeObj id in temporary state
        }
    }
)

// Generate HTML representations of each cake object
export const FrostingFlavors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const frostingAsHTML = frosting.map(   // iterates the array as a parameter of the function. returns an array of strings in a different format
        (frostingObject) => { // invoke a function for each cake object
            // that converts each cake object into an HTML representation of that cake object
            return `
                <li> 
            <input type="radio" name="frostingObject" value="${frostingObject.id}" /> ${frostingObject.name}
            </li>`
        }// the name shopws that they are grouped together
        //the value is unique so we use id that the user selected. it is extracted
    )
    const singleStringOfHTML = frostingAsHTML.join("")
     // join all strings in array into one single string it is a method

   
    html += singleStringOfHTML  // append single string of html to the current value of html variable  
    html += "</ul>" //appends it to the html tag

    return html
}