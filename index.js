const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const jobRoutes = require("./routes/job")
// console.log(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log("Connection with Database established successfully"))
.catch((err) => console.log("ERROR CONNECTING WITH DATABASE", err));

app.use(express.json());

app.use(jobRoutes);

app.listen(10000, () => {
    console.log("Server Start At Port 4400");
})