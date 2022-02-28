import React, {Component} from 'react';
import store from "../../../redux/store";
import {Select, Button, Divider} from 'antd'
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from '../../../redux/count_action'



class ReduxCount extends Component {
    state = {optionValue: ''}
    render() {
        const {Option} = Select
        return (
            <div>
                <p>redux(store, reducer) count Component</p>
                <p>求和的值为：{store.getState()}</p>
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
        /*store.dispatch({
            type: 'increment',
            data: optionValue * 1
        })*/
        store.dispatch(createIncrementAction(optionValue*1))
    }
    decrement = () => {
        const {optionValue} = this.state
        /*store.dispatch({
            type: 'decrement',
            data: optionValue * 1
        })*/
        store.dispatch(createDecrementAction(optionValue*1))
    }
    incrementIfOdd = () => {
        const {optionValue} = this.state
        const count = store.getState()
        if (count % 2 !== 0) {
            /*store.dispatch({
                type: 'increment',
                data: optionValue * 1
            })*/
            store.dispatch(createIncrementAction(optionValue*1))
        }
    }
    incrementAsync = () => {
        const {optionValue} = this.state
        /*setTimeout(()=>{
            /!*store.dispatch({
                type: 'increment',
                data: optionValue * 1
            })*!/
            store.dispatch(createIncrementAction(optionValue*1))
        }, 500)*/
        // 第三种写法,异步action
        store.dispatch(createIncrementAsyncAction(optionValue*1, 500))
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }
}

export default ReduxCount;
