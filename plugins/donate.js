const MessagingResponse = require('twilio').twiml.MessagingResponse
const methods = {
    run: function(request, response) {
         // Strip the trigger word from the response.
        const message = 'Follow this link and click \"Donate\" to support our cause \nhttps://www.artsbusinesscollaborative.org/asp-products/the-okra-project-sponsored-project/\n\t -Text \'actions\' to get a list of our action items\n\t -Text \'hi\' for a list of all keywords'

         // Create a new response object to send to Twilio.
        const twiml = new MessagingResponse(message.conc)

        // Add the message to it, and send it back to Twilio.
        twiml.message(message)
        response.set('Content-Type', 'text/xml')
        response.send(twiml.toString())
    },

    meta: {
        aliases: ['donate', 'donations']
    }
}
module.exports = methods
