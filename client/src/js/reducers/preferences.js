const ADD_PREFERENCE = 'ADD_PREFERENCE'
const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
const POPULATE_QUESTIONS = 'POPULATE_QUESTIONS'
const TOGGLE_INPUT = 'TOGGLE_INPUT'
const SET_ANSWER = 'SET_ANSWER'
const TYPE_ANSWER = 'TYPE_ANSWER'
const SET_OPEN_ANSWER = 'SET_OPEN_ANSWER'
const SAVE_ANSWERS = 'SAVE_ANSWERS'
const SAVED_QUESTIONS = 'SAVED_QUESTIONS'
const NEXT = 'NEXT'

const initState = {
    questions: [{
        question: "",
        answers: [],
        selectedAnswer: "",
        openAnswer: ""
    }],
    currentQuestion: 0,
    showInput: false,
    fetching: false,
    fetched: false,
    preferences: [],
    saving: false,
    saved: false,
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_PREFERENCE:
            return {
                ...state,
                preferences: [...state.preferences, action.payload]
            }

        case FETCH_QUESTIONS: {
            return {...state, fetching: true}
        }

        case POPULATE_QUESTIONS: {
            return {
                ...state,
                fetching: false,
                questions: action.payload
            }
        }

        case SAVED_QUESTIONS: {
            return {
                ...state,
                fetching: false,
                saved: true
            }
        }

        case TOGGLE_INPUT: {
            return {
                ...state,
                showInput: action.payload
            }
        }

        case SET_ANSWER: {
            state.questions[action.payload.index].selectedAnswer = action.payload.answer
            return state;
        }

        case SET_OPEN_ANSWER: {
            state.questions[action.payload.index].selectedAnswer = action.payload.answer
            state.questions[action.payload.index].openAnswer = action.payload.answer
            return state;
        }

        case NEXT: {
            state.questions[state.currentQuestion + 1].openAnswer = ''
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                showInput: false
            }
        }

        case SAVE_ANSWERS : {
            return {
                ...state,
                saving: true
            }
        }

    }
    return state
}