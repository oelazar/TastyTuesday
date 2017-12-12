'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dinerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    skills: {
        type: [String],
        required: false
    },
    email: {
        type: String,
        required: true
    },
    pic_base64: {
        type: String,
        required: true
    },
    isRegister: {
        type: Boolean,
        required: false
    },
    questions: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model('Diner', dinerSchema);


