import React, {Component, lazy, Suspense} from 'react';
import {NavLink, Route} from 'react-router-dom'
/*import Home from "./Home";
import About from "./About";*/
const Home = lazy(()=> import('./Home'))
const About = lazy(()=> import('./About'))

class LazyLoad extends Component {
    render() {
        return (
            <div>
                <p>路由懒加载</p>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <div>
                    <Suspense fallback={<p>loading...</p>}>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default LazyLoad;
