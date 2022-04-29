import React, {Component} from 'react';
import {Select, Button, Divider} from 'antd'
const {Option} = Select

class ReactReduxUI extends Component {
    state = {optionValue: ''}
    render() {
        return (
            <div>
                <p>react-redux Component</p>
                <p>求和的值为：{this.props.count}</p>
                <Select onChange={this.handle}>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                </Select><Divider type="vertical"/>
                <Button onClick={this.increment}>+</Button><Divider type="vertical"/>
                <Button onClick={this.decrement}>-</Button><Divider type="vertical"/>
                <Button onClick={this.incrementIfOdd}>奇数</Button><Divider type="vertical"/>
                <Button onClick={this.incrementAsync}>异步</Button>
            </div>
        );
    }
    handle = (value) => {
        console.log(value)
        this.setState({optionValue: value})
    }
    increment = () => {
        const {optionValue} = this.state
        this.props.increment(optionValue*1)
    }
    decrement = () => {
        const {optionValue} = this.state
        this.props.decrement(optionValue*1)
    }
    incrementIfOdd = () => {
        const {optionValue} = this.state
        const count = this.props.count
        if (count % 2 !== 0) {
            this.props.increment(optionValue*1)
        }
    }
    incrementAsync = () => {
        const {optionValue} = this.state
        this.props.incrementAsync(optionValue*1, 500)
    }
}

export default ReactReduxUI;
