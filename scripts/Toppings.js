import { getToppings, setToppingsId } from "./database.js"
// generates the html representation for each toppings object

const toppings = getToppings()

document.addEventListener(
    "change",
    (event) => {
        const eventName = event.target
        if (eventName.name === "toppingsType") {
            setToppingsId(parseInt(eventName.value))
        }//  the value is listed below and it is the value of the id. the id is set on the database page and hold it termporarily. 
    }
)
// everything from the browser is a string. parse in changes it into an interger so we can use it in the DOM
export const Toppings = () => {
    let html = "<ul>"

    // Use .map() for converting an array of objects into an array of strings
    const toppingsArray = toppings.map(   // iterates the array as a parameter of the function. returns an array of strings in a different format
        toppingsType => {
            return `<li> 
            <input type="radio" name="toppingsType" value="${toppingsType.id}" /> ${toppingsType.name}
            </li>`
        }// the name shopws that they are grouped together
        //the value is unique so we use id that the user selected. it is extracted
    )
    html += toppingsArray.join("")    // joins it to a single string. it is a method
    html += "</ul>" //appends it to the html tag

    return html
}