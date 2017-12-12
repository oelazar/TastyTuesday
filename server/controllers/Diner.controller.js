'use strict';
const _ = require('lodash');
const qs = require('koa-qs');
const models = require('../models')();
const request = require("co-request");
const session = require('koa.session');

class Diner {

    static *addDiner(user) {

        let dinerData =  null;

        yield models.Diner.find({username: new RegExp(user.username, 'i')}, (data)=> {
            if(data) {
                dinerData = data;
            }
        })

        if (dinerData && dinerData.length > 0) {
            return dinerData;
        }
        dinerData = _.pick(user, ['name', 'team', 'username', 'dept', 'phone', 'title', 'email', 'pic_base64']);

        const dinerSchema = new models.Diner(dinerData);

        try {
            yield dinerSchema.save();
            return dinerData;
        }
        catch (err) {
            throw Error("unable to save the user in the DB", err);
        }
    }

    static *getDinerByUserName() {

        let userName = this.query.username;
        let cUser = null;

        yield models.Diner.find({username: new RegExp(userName, 'i') }, (err, user)=> {
            cUser = user;
        })

        if (cUser.length > 0) {
            this.body = {isSuccess: true, data: cUser[0], message: ""};
        } else {
            this.body = {isSuccess: false, data: null, message: "User not found"};
        }
    }

    static *getAllDiners() {

        const dinerData = this.request.body;
        let cUsers = null;

        yield models.Diner.find({}, (err, users)=> {
            cUsers = users;
        })

        this.body = {isSuccess: true, data: cUsers, message: ""};
    }

    static *updateDinerByUsername() {

        let dinerData = JSON.parse(this.request.body);
        let username = dinerData.username;
            dinerData = _.omit(dinerData, ['username']);
        try {
            yield models.Diner.update({username: new RegExp(username, 'i')}, {'$set': dinerData}).exec()
            this.body = {isSuccess: true, data: null, message: "updated successfully"};
        }
        catch (err) {
            this.body = {isSuccess: false, data: null, message: "User not found"};
        }
    }

    static *getUserAndMeetingsByMail() {
        let email = this.query.email;

        try {
            let meetings = [];
            let user = {};

            yield models.Meeting.find({ "selected.email": email }, (err, m)=> {
                meetings = m;
            })

            yield models.Diner.findOne({ email: email }, (err, u)=> {
                user = u;
            })

            this.body = {isSuccess: true, data: { user: user, meetings: meetings} , message: ""};
        }
        catch (err) {
            this.body = {isSuccess: false, data: null, message: err};
        }
    }
}


module.exports = Diner;