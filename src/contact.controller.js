import nodemailer from 'nodemailer';

function getContact(req, res) {
    res.render('contact', {
        title: 'Contact Form'
    });
}

function postContact(req, res) {
    let mailOpts, smtpTrans;

    // Setup Nodemailer transport
    smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: 'user@gmail.com',
            pass: 'pass'
        }
    });

    // Mail options
    mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
        to: 'me@gmail.com',
        subject: 'Website contact form',
        text: req.body.message
    };

    // Send mail
    smtpTrans.sendMail(mailOpts, (error, response) => {
        // Email not sent
        if (error) {
            res.render('contact', {
                title: 'Raging Flame Laboratory - Contact',
                msg: 'Error occured, message not sent.',
                err: true
            })
        }
        // Email sent
        else {
            res.render('contact', {
                title: 'Raging Flame Laboratory - Contact',
                msg: 'Message sent! Thank you.',
                err: false
            })
        }
    });
}

export default {
    getContact,
    postContact
};