'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lunchSchema = new Schema({
    participants: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Lunch', lunchSchema);


