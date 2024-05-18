const express = require("express");
const mongoose = require("mongoose");

const app = express();

const jobRoutes = require("./routes/job")

mongoose.connect("mongodb+srv://Yugal6832:X9FcJGhikFeCP0Mm@jobapp.dcywvus.mongodb.net/")
.then(() => console.log("Connection with Database established successfully"))
.catch((err) => console.log("ERROR CONNECTING WITH DATABASE", err));

app.use(express.json());

app.use(jobRoutes);

app.listen(10000, () => {
    console.log("Server Start At Port 4400");
})