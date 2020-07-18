const MessagingResponse = require('twilio').twiml.MessagingResponse
const methods = {
    run: function(request, response) {
         // Strip the trigger word from the response.
        const name = request.Body.split(' ').slice(1).join(' ')
        const message = name.concat(' has signed up to volunteer!\n\n We are happy to have you. We cook on Fridays and Saturdays. We will reach out to your phone number to set up a time to meet. \n\n Text actions for other ways to get involved. Text help for a full list of keywords.')

         // Create a new response object to send to Twilio.
        const twiml = new MessagingResponse()

        // Add the message to it, and send it back to Twilio.
        twiml.message(message)
        response.set('Content-Type', 'text/xml')
        response.send(twiml.toString())      
    },

    meta: {
        aliases: ['volunteer', 'Volunteer', 'VOLUNTEER', 'volunteering', 'Volunteering', 'VOLUNTEER']
    }
}
module.exports = methods