import React, {Component} from 'react';
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
import Todo from "./index.module.css"

class TodoList extends Component {
    state = {
        todos:[
            {id: '1', name: 'angular', done: true},
            {id: '2', name: 'react', done: true},
            {id: '3', name: 'vue', done: true},
        ]
    }
    render() {
        return (
            <div className={Todo.container}>
                <p>todoList crud Component</p>
                <Header value={this.getValue}/>
                <List todos={this.state.todos}
                      updateTodos={this.updateTodos}
                      deleteTodos={this.deleteTodos}
                />
                <Footer todos={this.state.todos}
                        allTodos={this.allTodos}
                        clearDone={this.clearDone}
                />
            </div>
        );
    }
    getValue = (obj) =>{
        console.log('todolist', obj)
        const {todos} = this.state
        const newTodos = [obj, ...todos]
        this.setState({todos: newTodos})
    }
    updateTodos = (id, done) => {
        const {todos} = this.state
        const arr = todos.map(item => {
            if(item.id === id) {
                return {...item, done}
            }else {
                return item
            }
        })

        this.setState({todos: arr})
    }
    deleteTodos = (id) => {
        const {todos} = this.state
        const arr = todos.filter(item => {
            return item.id !== id
        })
        this.setState({todos: arr})
    }
    allTodos = (checked) => {
        console.log(checked)
        const {todos} = this.state
        const arr = todos.map(item => {
            return {...item, done: checked}
        })
        this.setState({todos: arr})
    }
    clearDone = () => {
        const {todos} = this.state
        const arr = todos.filter((item) => {
            return item.done !== true
        })
        if (window.confirm('delete?')){
            this.setState({todos: arr})
        }
    }
}

export default TodoList;
