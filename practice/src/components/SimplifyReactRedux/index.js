import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createIncrementAction} from "../../redux/count_action";
import {Button} from "antd"

class SimplifyReactRedux extends Component {
    render() {
        return (
            <div>
                <p>当前值为： {this.props.count}</p>
                <Button onClick={this.add}>+</Button>
            </div>
        );
    }
    add = () =>{
        this.props.add(1)
    }
}

export default connect(
    state =>( {count: state}),
    {
        add: createIncrementAction
    }
)(SimplifyReactRedux)
