import React, {Component} from 'react';
// import axios from 'axios'
import {Button, Input} from 'antd'

class Github extends Component {
    state = {users:[]}
    render() {
        return (
            <div>
                <p>search github users Component</p>
                <div style={{display: 'flex'}}>
                    <Input type="text" ref={currentElement => this.element = currentElement}/>
                    <Button onClick={this.search}>search</Button>
                </div>
                <div style={{display: 'flex',flexWrap: 'wrap',margin: '10px'}}>
                    {
                        this.state.users.map(item =>{
                            return (
                                <div key={item.id} style={{display: 'flex',flexDirection: 'column', margin: '10px'}}>
                                    <a href={item.html_url}>
                                        <img src={item.avatar_url} alt="" style={{width: '100px', height: '100px'}}/>
                                    </a>
                                    <span>{item.login}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
    search = async ()=>{
        console.log(this.element.value)
        // 第一种通过axios封装好的发送网络请求
        /*axios.get(`https://api.github.com/search/users?q=${this.element.value}`)
            .then(res=>{
                console.log(res)
                this.setState({users: res.data.items})
            })
            .catch(err=>{
                console.log(err)})*/
        // 第二种，在async/await中通过try/catch调用fetch发送请求
        try {
            const request = await fetch(`https://api.github.com/search/users?q=${this.element.value}`)
            const data = await request.json()
            this.setState({users: data.items})
        }catch (e) {
            console.log(e);
        }
    }
}

export default Github;
