import { getFrosting, setFrostingId } from "./database.js"
// generates the html representation for each frosting object

const frosting = getFrosting()

document.addEventListener(
    "change",
    (event) => {
        const eventName = event.target
        if (eventName.name === "frostingFlavors") {
            setFrostingId(parseInt(eventName.value))
        }//  the value is listed below and it is the value of the id. the id is set on the database page and hold it termporarily. 
    }
)

export const FrostingFlavors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const frostingArray = frosting.map(   // iterates the array as a parameter of the function. returns an array of strings in a different format
        frostingType => {
            return `<li> 
            <input type="radio" name="frostingFlavors" value="${frostingType.id}" /> ${frostingType.name}
            </li>`
        }// the name shopws that they are grouped together
        //the value is unique so we use id that the user selected. it is extracted
    )
    html += frostingArray.join("")    // joins it to a single string. it is a method
    html += "</ul>" //appends it to the html tag

    return html
}