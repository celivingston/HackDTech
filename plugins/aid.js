const MessagingResponse = require('twilio').twiml.MessagingResponse
const methods = {
    run: function(request, response) {
         // Strip the trigger word from the response.
         var message = ' ';
        if (request.Body.toLowerCase() == "aid") {
            var message = "If you need immediate monetary relief or assistance, please text your request, starting with the word apply."
        } else {
            var message = "Thanks! We got your application and will reach out to your phone number as soon as possible."
        }

         // Create a new response object to send to Twilio.
        const twiml = new MessagingResponse()

        // Add the message to it, and send it back to Twilio.
        twiml.message(message)
        response.set('Content-Type', 'text/xml')
        response.send(twiml.toString())      
    },

    meta: {
        aliases: ['apply', 'aid', 'assistance', 'APPLY', 'AID', 'ASSISTANCE', 'Apply', 'Aid', 'Assistance']
    }
}
module.exports = methods