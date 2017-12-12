'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    selected: {
        type: [Schema.Types.Mixed],
        required: true
    },
    room:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Meeting', meetingSchema);


