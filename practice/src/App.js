// import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>react</span>
      </header>
    </div>
  );
}*/
import React from 'react'
import Hello from "./components/Hello";
import TodoList from "./components/TodoList";
import Github from "./components/Github";
import Routers from "./components/Router";
import CountRedux from "./components/CountRedux";
import {Divider} from 'antd'

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Hello name="javascript"/>
                    <Divider style={{color: 'white'}}/>
                    <TodoList/>
                    <Divider style={{color: 'white'}}/>
                    <Github/>
                    <Divider style={{color: 'white'}}/>
                    <Routers/>
                    <Divider style={{color: 'white'}}/>
                    <CountRedux/>
                </header>
            </div>
        )
    }
}

export default App;

