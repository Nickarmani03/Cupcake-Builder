import { cupcakeBuilder } from "./CupcakeBuilderHTML.js"


const mainContainer = document.querySelector("#container") //variable that holds a reference to the main class

const renderHTML = () => {
    mainContainer.innerHTML = cupcakeBuilder()
}//replaces the inner main html with this

renderHTML() //invokes it