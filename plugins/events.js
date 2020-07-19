const MessagingResponse = require('twilio').twiml.MessagingResponse
const methods = {
    run: function(request, response) {
         // Strip the trigger word from the response.
        const message = 'The Okra Project has many connections with the theatre community and other artistic spaces. We use these connections to provide Black Trans people with completely free opportunities to view performances in some of the most renowned Off-Broadway houses. All attendees receive a chef-prepared  prepackaged meal along with their theatre ticket.\n\t-Text \'actions\' to learn more about how you can get involved.\n\t-Text \'hi\' for a list of all keywords.'

         // Create a new response object to send to Twilio.
        const twiml = new MessagingResponse(message.conc)

        // Add the message to it, and send it back to Twilio.
        twiml.message(message)
        response.set('Content-Type', 'text/xml')
        response.send(twiml.toString())
    },

    meta: {
        aliases: ['events', 'event', 'upcoming']
    }
}
module.exports = methods
