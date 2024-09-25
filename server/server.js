import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

import dotenv from 'dotenv';
import env from "./env.js"

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());




// route for Nodemailer
app.post('/send-email', (req, res) => {
    const { role } = req.body;
    console.log("/send-email triggered...");
    // console.log("gmail_user", process.env.GMAIL_USER);
    // console.log("gmail_pass", process.env.GMAIL_PASS);
    // console.log("process.env", process.env);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        },
        logger: true,
        debug: true 
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `Portfolio - New ${role} Click`,
        text: `A user clicked on the ${role} button!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); 
            return res.status(500).json({ error: 'Failed to send email.' });
        } 
        console.log(`Success! Email sent to ${mailOptions.to} with subject "${mailOptions.subject}"`);
        res.status(200).json({ message: 'An email has been sent to message ' + process.env.GMAIL_USER + ' about your visit. Thank you!' });
    });
});



//LISTEN
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})