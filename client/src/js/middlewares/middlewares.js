/**
 * Created by shir.shaashua on 29/11/2017.
 */
import axios from 'axios'
import {failedToLogin, loginLoader} from '../actions/login'
import {populateQuestions, savedQuestions} from '../actions/preferences'
import {populateMeetings} from '../actions/user'

const LOGIN_CLICK = 'LOGIN_CLICK'
const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
const SAVE_ANSWERS = 'SAVE_ANSWERS'
const GET_MEETINGS = 'GET_MEETINGS'

export default store => next => action => {
    if (action.type === LOGIN_CLICK) {

        store.dispatch(loginLoader(true))

        return axios.post('http://34.216.8.106:3001/api/login', {
            username: action.item.userName,
            password: action.item.password,
        })
            .then((response) => {
                console.log('ok', response)
                store.dispatch(loginLoader({loading: false, success: true}))
                console.log("before push")
            })
            .catch((err) => {
                console.log("login error", err)
                store.dispatch(failedToLogin(err.response.data))
                store.dispatch(loginLoader({loading: false, success: false}))
            })
    }

    if (action.type === FETCH_QUESTIONS) {
        return axios.get('http://34.216.8.106:3001/api/getAllQuestions')
            .then((response) => {
                console.log('ok', response.data.data)
                store.dispatch(populateQuestions(response.data.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    if (action.type === SAVE_ANSWERS) {
        console.log("payload", action.payload)
        store.dispatch(savedQuestions())

/*        return axios.post('http://34.216.8.106:3001/api/updateDinerByUsername', action.payload)
            .then((response) => {
                console.log('answers', response.data.data)
                store.dispatch(savedQuestions())
            })
            .catch((err) => {
                console.log("error saving answers", err)
                store.dispatch(savedQuestions())
            })*/
    }

    if (action.type === GET_MEETINGS) {
        return axios.get('http://34.216.8.106:3001/api/getUserAndMeetingsByMail', {email: action.payload})
            .then((response) => {
                store.dispatch(populateMeetings({
                    users: [
                        {
                            questions: [{
                                "question_id": 0,
                                "question": "Whan do you usually eat your lunch?",
                                "answer": "Early riser (12am)"
                            }, {
                                "question_id": 1,
                                "question": "How many years are you working at ironSource?",
                                "answer": "2"
                            }, {"question_id": 3, "question": "What was your first job?", "answer": "Carpenter"}, {
                                "question_id": 4,
                                "question": "If you could only choose one vacation destination where would you pick?",
                                "answer": "USA"
                            }, {
                                "question_id": 5,
                                "question": "If you were a vegetable, what vegetable would you be?",
                                "answer": "Onion"
                            }, {
                                "question_id": 6,
                                "question": "If you could wake up as a founder tomorrow, which founder would you be?",
                                "answer": "Omer"
                            }, {
                                "question_id": 7,
                                "question": "If you had a boat, what would you name it?",
                                "answer": "Titanic"
                            }, {
                                "question_id": 8,
                                "question": "How much does a polar bear weigh?",
                                "answer": "1024KG"
                            }, {
                                "question_id": 9,
                                "question": "What is/was the your project?",
                                "answer": "Team Analytics"
                            }]
                        },
                        {
                            questions: [{
                                "question_id": 0,
                                "question": "Whan do you usually eat your lunch?",
                                "answer": "12:00 lazy"
                            }, {
                                "question_id": 1,
                                "question": "How many years are you working at ironSource?",
                                "answer": "4"
                            }, {"question_id": 3, "question": "What was your first job?", "answer": "Waiter"}, {
                                "question_id": 4,
                                "question": "If you could only choose one vacation destination where would you pick?",
                                "answer": "Berlin"
                            }, {
                                "question_id": 5,
                                "question": "If you were a vegetable, what vegetable would you be?",
                                "answer": "Banana"
                            }, {
                                "question_id": 6,
                                "question": "If you could wake up as a founder tomorrow, which founder would you be?",
                                "answer": "Tomer"
                            }, {
                                "question_id": 7,
                                "question": "If you had a boat, what would you name it?",
                                "answer": "The Totah"
                            }, {
                                "question_id": 8,
                                "question": "How much does a polar bear weigh?",
                                "answer": "124KG"
                            }, {
                                "question_id": 9,
                                "question": "What is/was the your project?",
                                "answer": "Aura"
                            }]
                        }
                    ]
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    next(action)
}