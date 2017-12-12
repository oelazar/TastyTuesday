const GET_MEETINGS = 'GET_MEETINGS'
const POPULATE_MEETINGS = 'POPULATE_MEETINGS'

export const fetchMeetings = (payload) => {
    console.log(payload)
    return {
        type: GET_MEETINGS,
        payload
    }
}

export const populateMeetings = (payload) => {
    console.log(payload)
    return {
        type: POPULATE_MEETINGS,
        payload
    }
}