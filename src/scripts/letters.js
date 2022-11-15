import { getTopics, getAuthors, getRecipients } from "./dataAccess.js"
import { sendLetter } from "./dataAccess.js"





export const letters = () => {
    const topics = getTopics()
    const authors = getAuthors()
    const recipients = getRecipients()
    let html = `

    <select id="author">
    <option value="0">Select an Author</option>
    ${authors.map(
        (author) => {
            return `<option name="author" class="authors" value="${author.id}">${author.name}</option>`
        }
    ).join("")
        }
    </select>
        <div class="letters">
            <label class="label" for="letters">Letter</label>
            <input type="text" name="letters" class="input" />
        </div>

          ${topics.map(topic => {
        return `
                    <input type="radio" name="topics" value="${topic.id}" /> ${topic.name}
        `
    })}

  

    <select id="recipients">
    <option value="0">Select a Recipient</option>
    ${recipients.map(
            (recipient) => {
                return `<option name="recipients" value="${recipient.id}">${recipient.name}</option>`
            }
        ).join("")
        }
    </select>


    
        
  
    

        <button class="button" id="sendLetter">Send Letter</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

//each of these are listening for when submitRequest is clicked.
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userAuthorId = document.querySelector("#author").value
        const userTopicId = document.querySelector("input[name='topics']").value
        const userRecipientId = document.querySelector("select[id='recipients']").value
        const text = document.querySelector("input[name='letters']").value
        // Make an object out of the user input
        //this creates a new object in our function in dataAccesss
        const dataToSendToAPI = {
            text: text,
            authorId: (parseInt(userAuthorId)),
            topicId: (parseInt(userTopicId)),
            recipientId: (parseInt(userRecipientId)),
            date: new Date().toDateString()
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})