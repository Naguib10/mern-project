const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DirectorModel = require('./models/directors');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://naguib123:Naguib123@cluster0.bcag4hw.mongodb.net/mernproject?retryWrites=true&w=majority");

app.get("/getDirectors", (req, res) => {
    DirectorModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

app.post("/createDirector", async (req, res) => {
    const director = req.body;
    const newDirector = new DirectorModel(director);
    await newDirector.save();

    res.json(director);
})

app.listen(3001, () => {
    console.log("server started")
});