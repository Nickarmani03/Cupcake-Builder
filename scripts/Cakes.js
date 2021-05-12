import { getCakes, setCakeId } from "./database.js"
// generates the html representation for each cake object

const cakes = getCakes()

document.addEventListener(
    "change",
    (event) => {
        const eventName = event.target
        if (eventName.name === "cakeType") {
            setCakeId(parseInt(eventName.value))
        }//  the value is listed below and it is the value of the id. the id is set on the database page and hold it termporarily. 
    }
)

export const Cakes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const cakeArray = cakes.map(   // iterates the array as a parameter of the function. returns an array of strings in a different format
        cakeType => {
            return `<li> 
            <input type="radio" name="cakeType" value="${cakeType.id}" /> ${cakeType.name}
            </li>`
        }// the name shopws that they are grouped together
        //the value is unique so we use id that the user selected. it is extracted
    )
    html += cakeArray.join("")    // joins it to a single string. it is a method
    html += "</ul>" //appends it to the html tag

    return html
}