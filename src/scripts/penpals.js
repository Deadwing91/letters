import { letters } from "./letters.js"
import { letterHTML } from "./LettersHTML.js"



export const penPals = () => {
    return `
        <h1>Pen Pals</h1>
        <section class="penPals">
            ${letters()}
        </section>

        <section class="letters">
            <h2></h2>
            ${letterHTML()}
        
        </section>
    `
}