import express from 'express';
import dotenv from "dotenv";

import documents from "../routes/something.js"
import authenticate from "../routes/authenticate.js";

dotenv.config();

const app = express();
const { PORT } = process.env;

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.use("/documents", authenticate, documents);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
