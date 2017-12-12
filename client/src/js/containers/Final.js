import React, {Component} from 'react'
import {each} from 'lodash'

import '../../css/containers/final.scss';
import final from '../../imgs/final.gif';

class Final extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="final">
                <h1>Yippee ki-yay</h1>
                <img src={final}/>
                <h5>Thanks for joining our lunch table!
                    We'll email you as soon as we find your lunch mates</h5>
            </div>
        )
    }
}

export default Final
