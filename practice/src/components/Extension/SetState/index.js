import React, {Component} from 'react';
import {Button} from 'antd'
class SetState extends Component {
    state = {count: 0}
    render() {
        return (
            <div>
                <p>count值：{this.state.count}</p>
                <Button onClick={this.add}>对象式setState</Button>
                <Button onClick={this.create}>函数式setState</Button>
            </div>
        );
    }
    add = ()=>{
        let {count} = this.state
        // 状态的更新是异步的
        this.setState({count: count+1})
        console.log('此时是原先的值', this.state.count)
        /*
        this.setState({count: count+1}, ()=>{
            console.log('此时是实时的值', this.state.count)
        })
        */
    }
    create = ()=>{
        this.setState((state,props)=>({count: state.count+1}), ()=>{
            console.log('此时是实时的值', this.state.count)
        })
    }
}

export default SetState;
