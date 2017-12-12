'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    isBusy: {
        type: Boolean,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Room', roomSchema);
