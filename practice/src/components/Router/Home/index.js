import React, {Component} from 'react';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import News from "./News";
import Message from "./Message";
import Hot from "./Hot";


class Home extends Component {
    render() {
        return (
            <div>
                <h1>home</h1>
                {/*params传参*/}
                <NavLink to="/home/news/news">News</NavLink>|
                {/*query 或者叫做 search传参*/}
                <NavLink to="/home/message?name='msg'&title='message'">Message</NavLink>|
                {/*state传参，路由的state不是react的state*/}
                <NavLink to={{pathname: '/home/hot', state: {name: 'hot'}}}>Hot</NavLink>
                <div>
                    <Switch>
                        <Route path="/home/news/:name" component={News}></Route>
                        <Route path="/home/message" component={Message}></Route>
                        <Route path="/home/hot" component={Hot}></Route>
                        <Redirect to="/home/message"/>
                        {/*与vue中redirect作用一致，用来定义首页*/}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;
