const MessagingResponse = require('twilio').twiml.MessagingResponse
const methods = {
    run: function(request, response) {
         // Strip the trigger word from the response.
        const message = "Here are some ways to get involved:\n - Text 'actions' to learn about our upcoming events\n - Text 'petition' to learn about a recent petition and sign it\n - Text 'donate' to find out how you can financially support the Okra Project"

         // Create a new response object to send to Twilio.
        const twiml = new MessagingResponse()

        // Add the message to it, and send it back to Twilio.
        twiml.message(message)
        response.set('Content-Type', 'text/xml')
        response.send(twiml.toString())      
    },

    meta: {
        aliases: ['action', 'actions', 'Action', 'Actions', 'ACTION', 'ACTIONS']
    }
}
module.exports = methods
