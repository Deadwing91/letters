import { getRecipients } from "./dataAccess.js"
import { getAuthors } from "./dataAccess.js"
import { sendLetter } from "./dataAccess.js"




const convertletterToHTML = (letter) => {
    const authors = getAuthors()
        let letterHTML = `<li>
            ${reservation.date} | ${reservation.parent} | ${reservation.child} | ${reservation.guests} <select class="clowns" id="clowns">
            <option value="">Choose</option>
        ${authors.map(
            author => {
                return `<option id="authors" value="${reservation.id}--${clown.id}">${clown.name}</option>`
            }).join("")}
            </select>
            <button class="reservation__delete"
                    id="reservation--${reservation.id}">
                Delete
            </button>
        </li>
    `

        return reservationHTML

}


const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")

         
            const completion = {

                reservationId: (parseInt(reservationId)),
                clownId: (parseInt(clownId)),
                date_created: Date.now()
             }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
             saveCompletion(completion)
        }
    }
)


export const Reservations = () => {
    const reservations = getReservations()

    let html = `<ul>
             ${reservations.sort(function(a,b){ return new Date(a.eventDate) - new Date(b.eventDate)}).map(convertReservationToHTML).join("")}
            </ul>`

    return html
 
}