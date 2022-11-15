const applicationState = {
    authors: [],
    topics: [],
    letters: [],
    recipients: []

}

const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

//fetch functions to get data from api
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (allAuthors) => {
                //store external state in application state
                applicationState.authors = allAuthors
            }
        )
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (allTopics) => {
                //store external state in application state
                applicationState.topics = allTopics
            }
        )
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))


}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (allRecipients) => {
                //store external state in application state
                applicationState.recipients = allRecipients
            }
        )
}
export const fetchSentLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (allLetters) => {
                //store external state in application state
                applicationState.letters = allLetters
            }
        )
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const sendLetter = (completionObj) => {
    const fetchsendLetter = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completionObj)
    }


    return fetch(`${API}/letters`, fetchsendLetter)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}