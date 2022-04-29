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
import ReactReduxContainer from "./components/ReactRedux";
// import {Provider} from'react-redux'
import store from "./redux/store";
import SimplifyReactRedux from "./components/SimplifyReactRedux";
import Person from "./components/Person";
import Extension from "./components/Extension";
import {Divider} from 'antd'

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Hello name="javascript"/>
                    <Divider/>
                    <TodoList/>
                    <Divider/>
                    <Github/>
                    <Divider/>
                    <Routers/>
                    <Divider/>
                    <CountRedux/>
                    <Divider/>
                    <ReactReduxContainer/>
                    <Divider/>
                    <SimplifyReactRedux store={store}/>
                    <Divider/>
                    <Person/>
                    <Extension/>
                </header>
            </div>
        )
    }
}

export default App;

