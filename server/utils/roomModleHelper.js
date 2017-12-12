'use strict';
const _ = require('lodash');
const models = require('../models')();

module.exports = {

    getRoom: ()=>{

        let roomList = models.Room.find({"isBusy" : false});

        try {
            if(roomList.length > 0){
                let room =  _.sample(roomList);
                room.isBusy = true;
                models.Diner.update({number: new RegExp(room.number, 'i')}, {'$set': room}).exec();
                return {isSuccess: true, data: room}
            }
            else {
                return {isSuccess: false, data: [], message: "no rooms" }
            }
        } catch (err) {
            return {isSuccess: false, data: null, msg: err.message};
        }

    }
}