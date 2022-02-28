import React, {Component} from 'react';
import {NavLink,Link, Route, Switch} from 'react-router-dom'
import Home from "./Home";
import About from "./About";


class Routers extends Component {
    render() {
        return (
            <div>
                <p>route Component</p>
                <div style={{display: 'flex', border: '1px solid #fff'}}>
                    <div style={{display: 'flex', flexDirection: 'column', border: '1px solid #fff'}}>
                        {/*NavLink与Link都可以，NavLink多了一些样式设置*/}
                        <NavLink to="/home" style={{lineHeight: '30px', border: '1px solid #fff'}}>HOME</NavLink>
                        <NavLink to="/about" style={{lineHeight: '30px', border: '1px solid #fff'}}>ABOUT</NavLink>
                    </div>
                    <div>
                        <Switch>
                            {/*Switch用于在路径相同的情况下，只匹配第一个，这个可以避免重复匹配
                            不加Switch会在路径相同的情况下全部匹配
                            */}
                            <Route path="/home" component={Home}/>
                            <Route path="/about" component={About}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Routers;
