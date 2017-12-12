import React, {Component} from 'react'
import {connect} from 'react-redux'

import Row from 'react-bootstrap/es/Row'
import FormGroup from 'react-bootstrap/es/FormGroup'
import FormControl from 'react-bootstrap/es/FormControl'
import ControlLabel from 'react-bootstrap/es/ControlLabel'
import Button from 'react-bootstrap/es/Button'
import Col from 'react-bootstrap/es/Col'
import {loginClick, changeUserName, changePassword} from '../actions/login'

import '../../css/containers/login.scss'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    sendToLogin() {
        this.props.dispatch(loginClick(this.props.Login.loginData))
    }

    changeUsernameClick(event) {
        this.props.dispatch(changeUserName(event.target.value))
    }

    changePasswordClick(event) {
        this.props.dispatch(changePassword(event.target.value))
    }

    handleKeyPress(target) {
        if (target.charCode === 13) {
            this.props.dispatch(loginClick(this.props.Login.loginData))
        }
    }


    render() {
        let {userName, password} = this.props.Login.loginData
        let {loading} = this.props.Login
        let LoginBtn = loading
            ? <Button bsStyle='primary' onClick={this.sendToLogin.bind(this)}> <span>preloader</span>Login</Button>
            :
            <Button bsStyle='primary' onClick={this.sendToLogin.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}>Login</Button>

        console.log("this.props.Login",this.props.Login)

        if(this.props.Login.success ){
            this.props.history.push('/preferences')
        }

        return (
            <div className="login">
                <h2>Subscribe with your account</h2>
                <div className="loginForm">
                    <Row>
                        <Col md={12}>
                            <FormGroup controlId='usernameWarning'>
                                <ControlLabel>User name:</ControlLabel>
                                <FormControl type='text' value={userName}
                                             onChange={this.changeUsernameClick.bind(this)}
                                             onKeyPress={this.handleKeyPress.bind(this)}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <FormGroup controlId='passwordWarning'>
                                <ControlLabel>Password:</ControlLabel>
                                <FormControl type='password' value={password}
                                             onChange={this.changePasswordClick.bind(this)}
                                             onKeyPress={this.handleKeyPress.bind(this)}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            {LoginBtn}
                        </Col>
                    </Row>
                </div>
            </div>
        )

    }
}

function mapStateToProps(state, prop) {
    return state
}

export default connect(mapStateToProps)(Login)
