import React, {Component} from 'react';
import {Button} from 'antd'

class Footer extends Component {
    render() {
        const {todos} = this.props
        let count = todos.reduce((pre, current) =>{
            return pre + (current.done ? 1 : 0)
        }, 0)
        return (
            <div>
                <input type="checkbox"
                       checked={count === todos.length && todos.length !== 0 ? true : false}
                       onChange={this.checkedChange}
                />
                <span style={{fontSize: '15px'}}>已选择{count}/总数{todos.length}</span>&nbsp;|&nbsp;
                <Button onClick={this.allDelete}>清除已选择</Button>
            </div>
        );
    }
    checkedChange = (e) => {
        this.props.allTodos(e.target.checked)
    }
    allDelete = () => {
        this.props.clearDone()
    }
}

export default Footer;
