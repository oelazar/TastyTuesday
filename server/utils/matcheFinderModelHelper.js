'use strict';
const _ = require('lodash');
const models = require('../models')();

module.exports = {

    getTheSelectedones: (users)=>{

        let theSelectedones = [];

        while (theSelectedones.length != 3) {

            let diner = _.sample(users);

            //try 3 times to find a partner
            for (let i = 1; i < 4; i++) {

                let item = _.find(theSelectedones, {"team": diner.team});

                if (item === undefined) {
                    theSelectedones.push(diner);
                    _.pull(users, diner);
                    break;
                }

                if (i == 3) {
                    theSelectedones.push(diner);
                    _.pull(users, diner);
                }
            }
        }

        return theSelectedones;

    }
}