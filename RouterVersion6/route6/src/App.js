import React from 'react'
import {NavLink, Routes, Route, Navigate, useRoutes} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";
import Message from "./pages/Message";
import route from './routes/index'
export default function App() {
    const routes = useRoutes(route)


    return (
        <div>
            <div>
                <NavLink to='/about'>About</NavLink>|
                <NavLink to='/home'>Home</NavLink>|
                <NavLink to='/urlNavigation'>url</NavLink>
            </div>
            <div>
                {/*<Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/" element={<Navigate to='/about'/>} />
                    //router5中为
                    //<BrowserRouter>
                        //<Switch>
                           // <Route path="/home" component={Home}/>
                        //</Switch>
                    //</BrowserRouter>

                </Routes>*/}

                {/*与之作用一致*/}
                {routes}
            </div>
        </div>
    )
}
