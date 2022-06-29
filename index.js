var nodemailer = require('nodemailer');

const x = async () => {
    var transporter = await nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 587,
        auth: {
            user: 'email here',
            pass: 'password here'
        }
    });
    
    await transporter.verify(function(error, success) {
        if (error) {
             console.log(error);
        } else {
             console.log('Server is ready to take our messages');
        }
     });
    
    await transporter.sendMail({
        from: 'support@example.com',
        to: 'user@example.com',
        subject: 'Message 1',
        text: 'I hope this message gets delivered!'
    }, (err, info) => {
        console.log(info.envelope);
        console.log(info.messageId);
        console.log(err)
    
    });
    
}

x()