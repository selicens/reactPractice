import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Input} from 'antd'

class Header extends Component {
    static propTypes = {
        value: PropTypes.func.isRequired
    }
    render() {
        return (
            <div>
                <Input type="text" placeholder="请输入内容，按回车确认" onKeyUp={this.enter}/>
            </div>
        );
    }
    enter = (e) => {
        if (e.keyCode === 13){
            console.log(e.target.value, e.keyCode);
            if (e.target.value.trim() === ''){
                return console.log('null')
            }
            this.props.value({id: '4', name: e.target.value, done: false})
        }
    }
}

export default Header;
