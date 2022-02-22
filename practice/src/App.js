import logo from './logo.svg';
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

class App extends React.Component{
    render() {
        return <div className="App">
            <header className="App-header">
                <Hello name="hello"/>
                <TodoList/>
            </header>
        </div>
    }
}

export default App;

