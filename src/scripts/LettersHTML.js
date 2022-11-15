import { getLetters, getAuthors, getTopics, getRecipients } from "./dataAccess.js";



const letterList = (letter) => {
    const authors = getAuthors()
    const topics =  getTopics()
    const recipients = getRecipients()

    const foundAuthor = authors.find((author) => {
        return author.id === letter.authorId
    })
    const foundTopics = topics.find((topic) => {
        return topic.id === letter.topicId
    })
    const foundRecipients = recipients.find((recipient) => {
        return recipient.id === letter.recipientId
    })
    return `<section>
        Dear ${foundRecipients.name} ${foundRecipients.email} <p>${letter.text}</p>Sincerely,${foundAuthor.name}, ${foundAuthor.email} ${letter.date}
    ${foundTopics.name}</section>`
}
export const letterHTML = () => {
    const letters = getLetters()
    return letters.map(letterList).join("")
}
