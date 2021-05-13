import { addCupcake } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if(clickEvent.target.id === "submitButton"){
            addCupcake()
        }
    }
)

export const SubmitButton = () => {
    return `
        <button id="submitButton">Submit Cupcake</button>
    `
}