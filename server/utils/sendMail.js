'use strict';
let helper = require('sendgrid').mail;

module.exports = {

    send: (email ,html)=>{

        var fromEmail = new helper.Email('TastyTuesday@ironsrc.com');
        var toEmail = new helper.Email(email);
        var subject = 'TastyTuesday';
        var content = new helper.Content(html);
        var mail = new helper.Mail(fromEmail, subject, toEmail, content);
        var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
        var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });

        sg.API(request, function (error, response) {
            if (error) {
                console.log('Error response received');
            }
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        });
    }

}



