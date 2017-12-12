'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true
    }
});

questionSchema.plugin(autoIncrement.plugin, { model: 'Question', field: 'question_id' });

module.exports = mongoose.model('Question', questionSchema);

