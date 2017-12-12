'use strict';
const _ = require('lodash');
const qs = require('koa-qs');
const models = require('../models')();
const request = require("co-request");
const session = require('koa.session');
const dinerController = require("./Diner.controller");

class Authentication {

    static *login(ctx, next) {

        let params = this.request.body;

        const options = {
            url: "https://sso.interjunk.com/isso.php",
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US,en;q=0.8"
            },
            body: `username=${params.username}&password=${params.password}&ip=35.161.126.76&app=aura-hackathon`
        }

        let sso_res = yield request(options);
        let user_data = JSON.parse(sso_res.body);

        if(user_data)
        {
            var data =  yield dinerController.addDiner(user_data.extra);
            if(data) {
                this.session.user = data;
                this.body = {isSuccess: true, data: data, message: ""}
            }
            else {
                this.body = {isSuccess: false, data: null, message: ""}
            }
        }
    }
}

module.exports = Authentication;