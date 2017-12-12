const ADD_PREFERENCE = 'ADD PREFERENCE'
const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
const POPULATE_QUESTIONS = 'POPULATE_QUESTIONS'
const TOGGLE_INPUT = 'TOGGLE_INPUT'
const SET_ANSWER = 'SET_ANSWER'
const TYPE_ANSWER = 'TYPE_ANSWER'
const NEXT = 'NEXT'
const SET_OPEN_ANSWER = 'SET_OPEN_ANSWER'
const SAVE_ANSWERS = 'SAVE_ANSWERS'
const SAVED_QUESTIONS = 'SAVED_QUESTIONS'

export const addPreference = (payload) => {
    console.log(payload)
    return {
        type: ADD_PREFERENCE,
        payload
    }
}

export const fetchQuestions = (payload) => {
    console.log(payload)
    return {
        type: FETCH_QUESTIONS,
        payload
    }
}

export const populateQuestions = (payload) => {
    return {
        type: POPULATE_QUESTIONS,
        payload
    }
}

export const toggleInput = (payload) => {
    return {
        type: TOGGLE_INPUT,
        payload
    }
}

export const setAnswer = (payload) => {
    console.log("setAnswer", payload)
    return {
        type: SET_ANSWER,
        payload
    }
}

export const setOpenAnswer = (payload) => {
    console.log("setOpenAnswer", payload)
    return {
        type: SET_OPEN_ANSWER,
        payload
    }
}

export const next = (payload) => {
    return {
        type: NEXT,
        payload
    }
}

export const saveAnswers = (payload) => {
    return {
        type: SAVE_ANSWERS,
        payload
    }
}

export const savedQuestions = (payload) => {
    return {
        type: SAVED_QUESTIONS,
        payload
    }
}