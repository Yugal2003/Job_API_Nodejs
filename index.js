const express = require("express");
const mongoose = require("mongoose");

const app = express();

const jobRoutes = require("./routes/job")

mongoose.connect("mongodb://localhost:27017/jobapp")
.then(() => console.log("Connection with Database established successfully"))
.catch((err) => console.log("ERROR CONNECTING WITH DATABASE", err));

app.use(express.json());

app.use(jobRoutes);

app.listen(4400, () => {
    console.log("Server Start At Port 4400");
})