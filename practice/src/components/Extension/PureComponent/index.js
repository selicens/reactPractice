import React, {Component, PureComponent} from 'react';
import {Button} from 'antd'
class PureComponents extends PureComponent {
    // PureComponent自动处理
    state = {name: '张三'}
    update =  ()=>{
        this.setState({name: '李四'})
    }
    /* // 手动判断需不需要重新判断
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.name === nextState.name){
            return false
        }
        return true
    }*/

    render() {
        console.log('首次或数据更新会重新render')
        return (
            <div>
                <p>pureComponent组件优化</p>
                <p>当前name是{this.state.name}</p>
                <Button onClick={this.update}>UPDATENAME</Button>
            </div>
        );
    }
}

export default PureComponents;
