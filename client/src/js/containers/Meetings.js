import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Match from '../components/Match'

import {Button, Modal} from 'react-bootstrap'
import '../../css/containers/meetings.scss';
import {connect} from 'react-redux'
import {fetchMeetings} from '../actions/user'
import meetingPlace from '../../imgs/meetingPoint.jpg';

class Main extends Component {
    constructor(props) {
        super(props)
    }

    fetchData() {
        this.props.dispatch(fetchMeetings());
    }

    componentWillMount() {
        this.fetchData();
    }

    render() {
        let location = '';//this.props.meetings.meetings.room.type;
        return (
            <div className="meetings">
                <div className="title">
                    <img src={meetingPlace}/>
                    <div>
                        <h1>Get to know your matches</h1>
                        <p>Meet them on Tuesday at 13:00 {location}</p>
                    </div>
                </div>
                <div className="matches">
                    <Match index={0}></Match>
                    <Match index={1}></Match>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state, prop) {
    return state
}

export default connect(mapStateToProps)(Main)
