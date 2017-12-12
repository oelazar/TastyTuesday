import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggleInput, setAnswer, next, setOpenAnswer, saveAnswers} from '../../actions/preferences'
import {size} from 'lodash'
import Button from 'react-bootstrap/es/Button'

class Question extends Component {
    constructor(props) {
        super(props)
        this.answers = []
        this.widthPercentage = 100
        this.showOther = false;
        this.showInput = false
        this.colors = ["#4d65ff", "#ff8f9d", "#8cffb7", "#261582"]
        this.colorIndex = 0
    }

    setAnswers(answers) {
        let widthPercentage
        let items = answers.length + 1

        // Allow 2,3,4,6,8,9,12
        if (items > 12) {
            items = 12
        }

        switch (items) {
            case 5:
                items = 4
                break
            case 7:
                items = 6
                break
            case 10:
            case 11:
                items = 9
                break
        }

        switch (items) {
            case 3:
            case 6:
            case 9:
                widthPercentage = 33.333
                break
            case 2:
            case 4:
                widthPercentage = 50
                break
            case 8:
            case 12:
                widthPercentage = 25
                break
        }

        return {
            answers: answers.slice(0, items - 1),
            widthPercentage,
            showOther: false
        }
    }

    otherClick(e) {
        this.props.dispatch(toggleInput(true))
        console.log("showInput", this.showInput)
    }

    selectAnswer(index, answer) {
        this.props.dispatch(setAnswer({index, answer}))
    }

    typeChange(e) {
        console.log("answer", e.target.value)
        console.log("index", this.props.preferences.currentQuestion)
        this.props.dispatch(setOpenAnswer({index: this.props.preferences.currentQuestion, answer: e.target.value}))
    }

    next() {
        if (this.props.preferences.questions.length - 1 === this.props.preferences.currentQuestion) {
            const questions = this.props.preferences.questions.map(item =>
                ({
                    "question_id": item.question_id,
                    "question": item.question,
                    "answer": item.selectedAnswer
                })
            )

            const data = {questions, username: this.props.Login.loginData.userName}

            console.log("no more questions, saving...", data)
            this.props.dispatch(saveAnswers(data))

        } else {
            this.props.dispatch(next())
            if (this.colorIndex === this.colors.length - 1) {
                this.colorIndex = 0
            } else {
                this.colorIndex += 1
            }
            console.log("colorIndex", this.colorIndex)
        }
    }

    render() {
        console.log("this.props", this.props.preferences)
        let index = this.props.preferences.currentQuestion || 0;
        let item = this.props.preferences.questions[index]
        let openAnswer = this.props.preferences.questions[index].openAnswer
        let selectedAnswer = this.props.preferences.questions[index].selectedAnswer
        let showInput = this.props.preferences.showInput
        const data = this.setAnswers(item.answers)

        return (<div onClick={this.textClickOut}>
            <h1>{item.question}</h1>
            <div className="answers">
                {data.answers.map((answer, i) =>
                    <div onClick={() => this.selectAnswer(index, answer)}
                         className={`answer ${selectedAnswer === answer ? 'selected' : ''}`}
                         style={{
                             width: `calc(${data.widthPercentage}% - 12px)`,
                             border: `1px solid ${this.colors[this.colorIndex]}`
                         }}
                         key={i}>{answer}</div>
                )}
                <div className={`answer other ${selectedAnswer && selectedAnswer === openAnswer ? 'selected' : ''}`}
                     style={{
                         width: `calc(${data.widthPercentage}% - 12px)`,
                         border: `1px solid ${this.colors[this.colorIndex]}`,
                     }}

                     onClick={this.otherClick.bind(this)}> {showInput ? '' : size(openAnswer) > 0 ? openAnswer : "other"}
                    <input maxLength="20" value={openAnswer}
                           style={{display: `${ showInput ? 'inline-block' : 'none'}`}}
                           onChange={this.typeChange.bind(this)}/>
                </div>

            </div>

            <Button disable={!selectedAnswer ? "disable" : ""} bsStyle='primary'
                    onClick={this.next.bind(this)}>next</Button>
        </div>)

    }
}

function mapStateToProps(state, prop) {
    return state
}

export default connect(mapStateToProps)(Question)