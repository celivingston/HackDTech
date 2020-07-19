const MessagingResponse = require('twilio').twiml.MessagingResponse
const methods = {
    run: function(request, response) {
         // Strip the trigger word from the response.
        const message = 'Thanks for your interest in the Okra Project.\n\nThe Okra Project is a collective that seeks to address the global crisis faced by Black Trans people by bringing home cooked, healthy, and culturally specific meals and resources to Black Trans People wherever we can reach them.\nDuring the Middle Passage, our African ancestors snuck okra onto captive ships to sustain themselves and plant in the new world. Black Diasporic cooking traditions often use the okra plant for its versatility and it is often associated with health, prosperity, and community.\nIn this spirit, The Okra Project hopes to extend free, delicious, and nutritious meals to Black Trans people experiencing food insecurity.\n\nText actions to learn more about what you can do.\nText \'hi\' to get a list of all keywords.' 

         // Create a new response object to send to Twilio.
        const twiml = new MessagingResponse()

        // Add the message to it, and send it back to Twilio.
        twiml.message(message)
        response.set('Content-Type', 'text/xml')
        response.send(twiml.toString())      
    },

    meta: {
        aliases: ['about', 'organization']
    }
}
module.exports = methods