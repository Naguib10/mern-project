const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const DirectorModel = mongoose.model("directors", DirectorSchema);
module.exports = DirectorModel;