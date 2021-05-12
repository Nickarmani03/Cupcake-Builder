import { Cakes } from "./Cakes.js"
import { FrostingFlavors } from "./FrostingFlavors.js"
import { Toppings } from "./Toppings.js"

export const cupcakeBuilder = () => {
return  ` 
<h1>Cupcake Builder</h1>
<article class="selection">
    <section class="selection__cakes options">
        <h3>Cakes</h3>
        ${ Cakes() }
    </section>
    <section class="selection__FrostingFlavors options">
        <h3>Frosting Flavors</h3>
        ${ FrostingFlavors() }
    </section>
    <section class="selection__toppings">
        <h3>Toppings</h3>
        ${ Toppings() }
    </section>
</article>

<article>
<section class="cupcakeOrders">
        <h3>Cupcake Orders</h3>

</article>
`

}

//returns the html