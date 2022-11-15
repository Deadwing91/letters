import { penPals } from "./penpals.js"
import { fetchAuthors, fetchTopics, fetchSentLetters, fetchRecipients } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors()
        .then(() => fetchTopics())
        .then(() => fetchRecipients())
        .then(() => fetchSentLetters())
        .then(
            () => {
                mainContainer.innerHTML = penPals()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)