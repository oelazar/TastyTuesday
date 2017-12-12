const GET_MEETINGS = 'GET_MEETINGS'
const POPULATE_MEETINGS = 'POPULATE_MEETINGS'

const initState = {
    meetings: {
        room: {
            type: ''
        },

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
    },
    fetching: false,
    fetched: false,
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case GET_MEETINGS:
            return {...state, fetching: true}
        case POPULATE_MEETINGS:
        {
            console.log(action.payload);
            return {
                ...state,
                fetching: false,
                meetings: action.payload
            }
        }

    }
    return state
}