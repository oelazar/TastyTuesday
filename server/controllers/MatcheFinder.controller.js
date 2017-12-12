'use strict';
const _ = require('lodash');
const qs = require('koa-qs');
const models = require('../models')();
const session = require('koa.session');
const dinerController = require("./Diner.controller");
const roomModleHelper = require("../utils/roomModleHelper");
const matcheFinderModelHelper = require("../utils/matcheFinderModelHelper");

const emailSender = require('../utils/emailSender');

class MatcheFinder {

    static *test_sendemail()
    {
        emailSender.mondayMail("oren.elazar@ironsrc.com" );
    }

    static  *test_addUsers()
    {

             yield dinerController.addDiner({
                        name: "111111",
                        team: "Aura - R&D - Frontend",
                        username: "eran.mitrani",
                        dept: "Aura",
                        phone: "+972-54-7201221",
                        title: "Front-end developer",
                        email: "oren.elazar@ironsrc.com",
                        isRegister: true,
                        pic_base64: ""
                    });
        yield dinerController.addDiner({
                    name: "222222",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
        yield dinerController.addDiner({
                    name: "333333",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
        yield dinerController.addDiner({
                    name: "444444",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
            yield dinerController.addDiner({
                    name: "555555",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
        yield dinerController.addDiner({
                    name: "666666",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
        yield dinerController.addDiner({
                    name: "777777",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
        yield dinerController.addDiner({
                    name: "888888",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
    yield dinerController.addDiner({
                    name: "999999",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
        yield dinerController.addDiner({
                    name: "000000",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
        yield dinerController.addDiner({
                    name: "aaaaaa",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
        yield dinerController.addDiner({
                    name: "ssssss",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
            yield dinerController.addDiner({
                    name: "dddddd",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
                yield dinerController.addDiner({
                    name: "ffffff",
                    team: "Aura - R&D - Frontend",
                    username: "eran.mitrani",
                    dept: "Aura",
                    phone: "+972-54-7201221",
                    title: "Front-end developer",
                    email: "oren.elazar@ironsrc.com",
                    isRegister: true,
                    pic_base64: ""
                });
    }

    static  *test_addRooms()
    {
        const roomSchema = new models.Room({
            "number": "12-1",
            "isBusy": false,
            "picture" : "picture"
        });
        yield roomSchema.save();

        const roomSchema = new models.Room({
            "number": "12-2",
            "isBusy": false,
            "picture" : "picture"
        });
        yield roomSchema.save();

        const roomSchema = new models.Room({
            "number": "12-3",
            "isBusy": false,
            "picture" : "picture"
        });
        yield roomSchema.save();

        const roomSchema = new models.Room({
            "number": "12-4",
            "isBusy": false,
            "picture" : "picture"
        });
        yield roomSchema.save();

        const roomSchema = new models.Room({
            "number": "12-5",
            "isBusy": false,
            "picture" : "picture"
        });
        yield roomSchema.save();
    }

    static *register(){

        let cUser = null;
        let username = this.query.username;

        yield models.Diner.find({ "username": username }, (err, user)=> {
            cUser = user;
        })

        if (cUser) {
            cUser.isRegister = true;
            yield models.Diner.update({ "username": cUser.username }, {'$set': cUser}).exec();
        }

        this.body =  {isSuccess: true, data: cUser}
    }

    static *find(ctx, next) {

        let registerdUsers = null;

        //find 3 matchs
        yield models.Diner.find({"isRegister" : true}, (err, users)=> {
            registerdUsers = users;
        })

        if (registerdUsers && registerdUsers.length > 0) {

            let diners_clone = _.clone(registerdUsers);

            while (diners_clone.length > 3) {

            let theSelectedones = matcheFinderModelHelper.getTheSelectedones(diners_clone);

                if(theSelectedones.length > 0)  {

                    //looking for a room
                    let roomList = yield models.Room.find({"isBusy": false});

                    if (roomList.length > 0) {

                        let room = _.sample(roomList);
                        room.isBusy = true;
                        models.Diner.update({number: new RegExp(room.number, 'i')}, {'$set': room}).exec();

                        if (room) {

                            let meeting_diner = [];

                            _.forEach(theSelectedones, function (diner) {
                                _.pull(diners_clone, diner);
                                meeting_diner.push(diner);
                            })

                            const meetingSchema = new models.Meeting({
                                "selected": meeting_diner,
                                "room": room.number
                            });

                            yield meetingSchema.save();
                        }
                        else {
                            //no rooms
                            break;
                        }
                    }
                }
            }

            let meetings = yield models.Meeting.find({});

            this.body = {isSuccess: true, data: meetings, message: ""};
        }
    }
}

module.exports = MatcheFinder;