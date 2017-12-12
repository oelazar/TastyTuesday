import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Store from './store'

import Main from './containers/Main.js'
import Login from './containers/Login.js'
import GetAMatch from './containers/GetAMatch.js'
import Preferences from './containers/Preferences.js'
import Final from './containers/Final.js'
import Meetings from  './containers/Meetings.js'

import {HashRouter, Route, Switch} from 'react-router-dom'
import '../css/font.scss'
import '../css/globals.scss'

const StoreInstance = Store()

ReactDOM.render(
    <Provider store={StoreInstance}>
        <HashRouter>
            <div className="app-container">
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/get-match" component={GetAMatch}/>
                    <Route exact path="/preferences" component={Preferences}/>
                    <Route exact path="/final" component={Final}/>
                    <Route exact path="/meetings" component={Meetings}/>
                    <Route component={Main}/>
                </Switch>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)