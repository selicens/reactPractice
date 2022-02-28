import React, {Component} from 'react';
import ReduxCount from "./ReduxCount";
import {Select, Button, Divider} from 'antd'
const {Option} = Select


class CountRedux extends Component {
    state = {count: 0, optionValue: ''}
    render() {
        return (
            <div>
                <p>react count Component</p>
                <p>求和的值为：{this.state.count}</p>
                <Select onChange={this.handle}>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                </Select><Divider type="vertical"/>
                <Button onClick={this.increment}>+</Button><Divider type="vertical"/>
                <Button onClick={this.decrement}>-</Button><Divider type="vertical"/>
                <Button onClick={this.incrementIfOdd}>奇数</Button><Divider type="vertical"/>
                <Button onClick={this.incrementAsync}>异步</Button>
                <ReduxCount/>
            </div>
        );
    }
    handle = (value) => {
        console.log(value)
        this.setState({optionValue: value})
    }
    increment = () => {
        const {count, optionValue} = this.state
        this.setState({count: count + optionValue * 1})
    }
    decrement = () => {
        const {count, optionValue} = this.state
        this.setState({count: count - optionValue * 1})
    }
    incrementIfOdd = () => {
        const {count, optionValue} = this.state
        if (count % 2 !== 0) {
            this.setState({count: count + optionValue * 1})
        }
    }
    incrementAsync = () => {
        const {count, optionValue} = this.state
        setTimeout(()=>{
            this.setState({count: count + optionValue * 1})
        }, 500)
    }
}

export default CountRedux;
