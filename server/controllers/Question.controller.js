'use strict';
const _ = require('lodash');
const qs = require('koa-qs');
const models = require('../models')();


class Question {

    static *getRandomQuestion(){
        let questionList = [];
        try {
            yield models.Question.find({}, (err, questions)=> {
                questionList = questions;
            });
            this.body = { isSuccess: true, data: _.sample(questionList) };
        } catch(err) {
            this.status = err.status || 500;
            this.body = { isSuccess: false, data: null, msg: err.message };
        }
    }

    static *getAllQuestions() {
        let questionList = [];
        try {
            yield models.Question.find({}, (err, questions)=> {
                questionList = questions;
            })
            this.body = { isSuccess: true, data: questionList};

        } catch(err) {
            this.status = err.status || 500;
            this.body = { isSuccess: false, data: null, msg: err.message };
        }
    }

    static *addQuesion() {
        const questionData = this.request.body;
        const questionSchema = new models.Question(questionData);

        try {
            yield questionSchema.save();
            this.body = { isSuccess: true, data: 'success' };
        }
        catch (err) {
            this.status = err.status || 500;
            this.body = { isSuccess: false, data: null, msg: err.message };
        }
    }

    static *deleteQuestionById() {
        const questionId = this.request.body.questionId;
        try {
            yield models.Question.remove({question_id: questionId});
            this.body = { isSuccess: true, data: 'Question was removed' };
        }
        catch (err) {
            this.status = err.status || 500;
            this.body = { isSuccess: false, data: null, msg: err.message };
        }
    }
}

module.exports = Question;