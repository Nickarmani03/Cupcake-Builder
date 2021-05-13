import { Cakes } from "./Cakes.js"
import { FrostingFlavors } from "./FrostingFlavors.js"
import { Toppings } from "./Toppings.js"
import { SubmitButton } from "./SubmitButton.js"
import { Cupcakes } from "./Cupcakes.js"

export const CupcakeBuilder = () => {
    return ` 
<h1>Cupcake Builder</h1>
<article class="top-flex">
    <section class="selection__cakes options">
        <h3>Cakes</h3>
        ${Cakes()}
    </section>
    <section class="selection__FrostingFlavors options">
        <h3>Frosting Flavors</h3>
        ${FrostingFlavors()}
    </section>
    <section class="selection__toppings options">
        <h3>Toppings</h3>
        ${Toppings()}
    </section>
</article>

${SubmitButton()}
<article>
<h3>Cupcake Orders</h3>
${Cupcakes()}
</article>
`
}

//returns the html