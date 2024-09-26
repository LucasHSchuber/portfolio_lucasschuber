# lucasschuberportoflio

### React + Vite + Node.js

#### client - react app
#### server - next.js node.js

CLIENT: 
A create-react-app application displaying my work.

SERVER: 
A node.js next.js server currently including two routes:
    1. A standard get "/" route displaying a message
    2. A post "/send-email" route with nodemailer sending an email to my gmail each time user clicks "visitor" or "Recruiter".

Future notes:
To publish server to vercel:
- inlude vercel.json file
- make a automatic get "/" route to make sure it works with verce.app.domain 
- preferably separate client and server in different folders in project root