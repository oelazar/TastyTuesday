import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {Button, Modal} from 'react-bootstrap'
import '../../css/containers/main.scss';
import pizza from '../../imgs/pizza2.png';
import avocado from '../../imgs/avocado.png';
import falafel from '../../imgs/falafel.png';
import hotdog from '../../imgs/hotdog3.png';
import salad from '../../imgs/salad.png';
import sushi from '../../imgs/sushi2.png';
import burger from '../../imgs/burger2.png';

import {connect} from 'react-redux'

class Main extends Component {
    constructor(props) {
        super(props)
    }

    clearClassNames(data) {
        return _.each(data, (element)=> {
            element.className = '';
        });
    }

    componentDidMount() {
        let index = 0;
        const children = this.myDiv.children;
        const space = this.space;
        const icons = this.icons.children;
        let length = children.length - 1;

        console.log(space);
        setInterval(()=> {
            this.clearClassNames(children);
            //space.style.marginLeft = children[index].offsetWidth + 10 + 'px';
            children[index].className = 'current';
            index++;
            if (index === length) {
                index = 0;
            }
        }, 3000);
        setInterval(()=> {
            this.clearClassNames(icons);
            icons[index].className = 'currentIcon';
            index++;
            if (index === icons.length) {
                index = 0;
            }
        }, 4000);
    }

    render() {
        return (
            <div className="main">
                <div className="questionContainer">
                    <h1>When was the last time you had
                        <div className="icons" ref={i=>this.icons=i}>
                            <img src={pizza} className="currentIcon"/>
                            <img src={sushi}/>
                            <img src={burger}/>
                            <img src={falafel}/>
                            <img src={avocado}/>
                            <img src={hotdog}/>
                        </div>
                        <div className="spaceIcon">{''}</div>
                        with
                        <div className="switch" ref={c=>this.myDiv=c}>
                            <span className="current"> Eran?</span>
                            <span> Shir?</span>
                            <span> Dor?</span>
                            <span> Racheli?</span>
                            <span> Oren?</span>
                            <span style={{visibility:'hidden'}}> Racheli?</span>
                        </div>
                    </h1>
                </div>
                <div>
                    <button><Link to='/login'>Subscribe</Link></button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, prop) {
    return state
}
export default connect(mapStateToProps)(Main)
