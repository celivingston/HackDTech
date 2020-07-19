const MessagingResponse = require('twilio').twiml.MessagingResponse
const methods = {
    run: function(request, response) {
         // Strip the trigger word from the response.
        
        var message = ""
        if (request.Body.toLowerCase() == "volunteer"){
            var message = 'Our volunteer days for cooking meals are Friday and Saturday. If you would like to sign up to volunteer, text vname with your name!'
        }
        if (request.Body.toLowerCase() == "volunteering"){
            var message = 'Our volunteer days for cooking meals are Friday and Saturday. If you would like to sign up to volunteer, text vname with your name!'
        }
        if (request.Body.split(' ').slice(0,1).join('').toLowerCase() == "vname"){
            var name = request.Body.split(' ').slice(1).join(' ')
            var message = " ".concat(name, ' has signed up to volunteer!\n\n We are happy to have you. We will reach out to your phone number to set up a time to meet. \n\n Text actions for other ways to get involved. Text hi for a full list of keywords.')
        }


         // Create a new response object to send to Twilio.
        const twiml = new MessagingResponse()

        // Add the message to it, and send it back to Twilio.
        twiml.message(message)
        response.set('Content-Type', 'text/xml')
        response.send(twiml.toString())      
    },

    meta: {
        aliases: ['volunteer', 'Volunteer', 'VOLUNTEER', 'volunteering', 'Volunteering', 'VOLUNTEER', 'vname', 'VNAME', 'Vname']
    }
}
module.exports = methods
