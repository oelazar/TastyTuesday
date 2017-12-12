const schedule = require('node-schedule');
const emailSender = require('./emailSender');
const models = require('../models')();


class Schedualer {

    static init() {

        //every monday in 10:00 am.
        //send invitation email to all users.
        const MondayTask = schedule.scheduleJob('* * 10 * * 1', ()=>{
            models.Diner.find({}, (err, users)=> {
                users.forEach((user)=>{
                    emailSender.mondayMail(user.email)
                })
            })
        });

        //every tuesday in 10:00 am.
        //send meeting email to all register users.
        const TuesdayTask = schedule.scheduleJob('* * 10 * * 2', ()=>{
             models.Meeting.find({}, (err, meetings)=> {
                meetings.forEach((meeting)=>{
                    meeting.selected.forEach((user)=>{
                        emailSender.tuesdayMail(user.email)
                    })
                })
            })
        });
    }
}


module.exports = Schedualer;