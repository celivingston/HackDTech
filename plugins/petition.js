const MessagingResponse = require('twilio').twiml.MessagingResponse
const methods = {
    run: function(request, response) {
         // Strip the trigger word from the response.
        if (request.Body.toLowerCase().includes("petition")) {
            const message = "Justice for Brayla Stone - Brayla Stone was a black transgender woman who was murdered in Little Rock, Arkansas by a transphobic man. This is not making major news even when her killer boasted about the murder on social media saying that he was payed $5,000 dollars for the crime. ALL black lives matter, let’s get justice for Brayla! Text 'Sign <first name> <lastname>' to sign this petition. "
        } else {
            const message = "Thank you for signing! Text 'action' to learn about other ways you can help the Okra Project."
        }

         // Create a new response object to send to Twilio.
        const twiml = new MessagingResponse()

        // Add the message to it, and send it back to Twilio.
        twiml.message(message)
        response.set('Content-Type', 'text/xml')
        response.send(twiml.toString())      
    },

    meta: {
        aliases: ['peition', 'petitions', 'Petition', 'Petitions', 'PETITION', 'PETITIONS', 'sign', 'Sign', 'SIGN']
    }
}
module.exports = methods