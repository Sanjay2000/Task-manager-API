const nodemailer = require('nodemailer');
const { Logger } = require('mongodb');
require('dotenv').config()

const  transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});


const sendWelcomeEmail = (email,name) =>{
    transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: 'Thanks for joinig in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })

}

const sendCancelationEmail = (email,name) =>{
    transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: 'Sorry to see you go!',
        text: `Good bye, ${name}. I hope to see you back sometime soon.`
    })

}



module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}