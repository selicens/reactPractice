import React, {Component} from 'react';
import {Button} from 'antd'

class Item extends Component {
    state = {mouse: false}
    render() {
        return (
            <div style={{backgroundColor: this.state.mouse ? 'red' : '#282c34'}}
                 onMouseEnter={this.handle(true)}
                 onMouseLeave={this.handle(false)}
            >
                <input type="checkbox" checked={this.props.done} onChange={this.handleCheck(this.props.id)}/>
                <span>{this.props.name}</span>&nbsp;|&nbsp;
                <Button onClick={() => {this.delete(this.props.id)}} style={{display: this.state.mouse ? 'inline-block' : 'none'}}>清除</Button>
            </div>
        )
    }
    handle = (flag) =>{
        return () =>{
            this.setState({mouse: flag})
        }
    }
    handleCheck = (id) =>{

        return (e) =>{
            console.log(id, e.target.checked)
            this.props.updateTodos(id, e.target.checked)
        }
    }
    delete = (id)=>{
        if (window.confirm('delete？')){
            this.props.deleteTodos(id)
        }
    }
}

export default Item;
