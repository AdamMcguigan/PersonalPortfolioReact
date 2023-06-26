const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello From server "})
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    providerauth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
});

contactEmail.verify((error) => {
    if(error)
    {
        console.log(error)
    }
    else {
        console.log("Ready to send!")
    }
})

app.post("api/contact", bodyParser.urlencoded({extended: false}), (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
        `
    }
    contactEmail.sendMail(mail, (error) => {
        if(error)
        {
            res.json(error);
        }
        else{
            res.json({code:200, status: "Message Sent"})
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is online on Port: ${PORT}`)
})


//Chapter 10 - first page