const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config();
const cookieParser = require('cookie-parser');
const authRoute = require("./Routes/AuthRoute");
const {MONGO_URL, PORT} = process.env;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log("MongoDB is connected successfully")).catch((err) => console.error(err))


app.listen(PORT, ()=>{
    console.log(`server started on port: ${PORT}`)
})

app.use(cors({
    origin: ['http://localhost:3001'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))
app.use(cookieParser())

app.use(express.json());
app.use("/", authRoute)