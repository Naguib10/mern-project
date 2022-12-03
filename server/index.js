const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DirectorModel = require('./models/directors');

const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://naguib123:Naguib123@cluster0.bcag4hw.mongodb.net/mernproject?retryWrites=true&w=majority");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + " " + Date.now())
    }
});

var upload = multer({ storage: storage });

app.get("/getDirectors", (req, res) => {
    DirectorModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            //res.json(result);
            res.render('imagesPage', { result: result });
        }
    })
});

app.post("/createDirector", upload.single("image"), async (req, res) => {
    //const director = req.body;

    var director = {
        name: req.body.name,
        age: req.body.age,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            type: 'images/jpg'
        }
    }

    const newDirector = new DirectorModel(director);
    await newDirector.save();

    //res.json(director);
})

app.listen(3001, () => {
    console.log("server started")
});