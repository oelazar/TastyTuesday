import React, {Component} from 'react'
import {connect} from 'react-redux'
import {size} from 'lodash'
import {Tooltip,OverlayTrigger} from 'react-bootstrap'

class Match extends Component {
    constructor(props) {
        super(props)

    }

    createMatchesDiv(data) {
        let htmls = [];
        _.each(data, (item)=> {
            const tooltip = (
                <Tooltip id="tooltip">{item.question}</Tooltip>
            );
            htmls.push(<div className="box"><OverlayTrigger overlay={tooltip}><div>{item.answer}</div></OverlayTrigger></div>)
        })
        return htmls;
    }


    render() {
        const questions = [{ans:1,question:'bla'},{ans:2,question:'bla1'},{ans:3,question:'bla2'}];
        const index=this.props.index;
        const questions2=this.props.user.meetings.users[index].questions;
        const questionsWrappers = this.createMatchesDiv(questions2);

        console.log('questions2',questions2)
        return (<div className="match">
            <h3>Match #{index+1}</h3>
            <div className="boxes_container">
                {questionsWrappers}
            </div>

        </div>)

    }
}

function mapStateToProps(state, prop) {
    return state
}

export default connect(mapStateToProps)(Match)