const MessagingResponse = require('twilio').twiml.MessagingResponse
const methods = {
    run: function(request, response) {
         // Strip the trigger word from the response.
        const message = "Hi! Thank you for your interest in the Okra Project. Here are some keywords that you can text us:\n\t-Text \'actions\' to learn more about how you can get involved.\n\t-Text \'about\' to learn about our mission."

         // Create a new response object to send to Twilio.
        const twiml = new MessagingResponse()

        // Add the message to it, and send it back to Twilio.
        response.set('Content-Type', 'image/png')
        response.send('images/okraproject.png')
        twiml.message(message)
        response.set('Content-Type', 'text/xml')
        response.send(twiml.toString())
    },

    meta: {
        aliases: ['hi', 'Hi', 'Hello', 'hello', 'Help']
    }
}
module.exports = methods
