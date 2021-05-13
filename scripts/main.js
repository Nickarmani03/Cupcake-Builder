// Main is responsible for rendering HTML to the DOM
import { CupcakeBuilder } from "./CupcakeBuilderHTML.js"


const mainContainer = document.querySelector("#container") //variable that holds a reference to the Container class

const renderHTML = () => {
    mainContainer.innerHTML = CupcakeBuilder()
}//replaces the inner Container html with this

renderHTML() //invokes it

document.addEventListener("stateHasChanged", (event) => { //do not have to type the event
    console.log("State of data has changed. Regenerating HTML...")
    renderHTML() //renders it to the DOM
})