const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    img: {
        data: Buffer,
        type: String,
        required: false
    }
});

const DirectorModel = mongoose.model("directors", DirectorSchema);
module.exports = DirectorModel;