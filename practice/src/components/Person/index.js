import React, {Component} from 'react';
import {Input, Button} from 'antd'

class Person extends Component {
    render() {
        return (
            <div>
                <Input ref={c=>this.name=c} type="text" placeholder="输入名字"/>
                <Input ref={c=>this.age=c} type="text" placeholder="输入年龄"/>
                <Button onClick={this.add}>添加</Button>
                <ul>
                    <li>名字-年龄</li>
                </ul>
            </div>
        );
    }
    add = () => {
        const name = this.name.state.value,
              age = this.age.state.value

        const personObj = {id: Math.random()*100, name, age}
        console.log(personObj)
    }
}

export default Person;
