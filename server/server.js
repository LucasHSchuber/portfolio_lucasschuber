import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

import env from "./env.js"

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
    const { role } = req.body;

    console.log("/send-email triggered...")

    const transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: env.user,
            pass: env.pass
        }
    });

    const mailOptions = {
        from: 'lucas.hammarstrand@hotmail.com',
        to: 'lucas.hammarstrand@hotmail.com',
        subject: `New ${role} Click`,
        text: `A user clicked on the ${role} button.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); 
            return res.status(500).json({ error: 'Failed to send email.' });
        } 
        console.log(`Success! Email sent to ${to} with subject ${subject} and text ${text}`);
        res.status(200).send('Email sent: ' + info.response);
    });
});



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})