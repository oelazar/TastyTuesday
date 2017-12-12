import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../css/preferences.scss'
import Question from '../components/preferences/Question'
import {fetchQuestions} from '../actions/preferences'

class Preferences extends Component {
    constructor(props) {
        super(props)

        this.props.dispatch(fetchQuestions())

/*        if (!this.props.Login.success) {
            this.props.history.push('/login')
        }*/
    }

    render() {
        console.log("saving",this.props.preferences.saving)
        if (this.props.preferences.saving) {
            this.props.history.push('/final')
        }

        return (<div className="preferences">
            <Question/>
        </div>)

    }
}

function mapStateToProps(state, prop) {
    return state
}

export default connect(mapStateToProps)(Preferences)