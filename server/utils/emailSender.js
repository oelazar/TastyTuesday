class Emailhelper {

    sendMail(emailToSend, htmlContent) {
        const helper = require('sendgrid').mail;
        const fromEmail = new helper.Email('Tasty.Tuesdays@ironsrc.com');
        const toEmail = new helper.Email(emailToSend);
        const subject = 'Tast-Tuesday';
        const content = new helper.Content('text/html', htmlContent);
        const mail = new helper.Mail(fromEmail, subject, toEmail, content);
        const sg = require('sendgrid')('key');
        const request = sg.emptyRequest({
                                            method: 'POST',
                                            path: '/v3/mail/send',
                                            body: mail.toJSON()
                                        });

        sg.API(request, (error, response) => {
            if (error) {
                console.log('Error response received');
            }
         })
    }

    mondayMail(email) {
        const htmlContent = `<div>mondayMail</div>`;
        this.sendMail(email, htmlContent)
    }

    tuesdayMail(mail) {
        const htmlContent = `<div>tuesdayMail</div>`;
        this.sendMail(email, htmlContent)
    }
}

module.exports = new Emailhelper();






