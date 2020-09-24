import React, { Component } from 'react'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'

    

export default class App extends Component {
    state = {
        todoListItem: [
            {
                id: 1,
                title: 'Task 1',
                isDone: false
            },
            {
                id: 2,
                title: 'Task 2',
                isDone: false
            },
            {
                id: 3,
                title: 'Task 3',
                isDone: false
            },
            {
                id: 4,
                title: 'Task 4',
                isDone: false
            },
            {
                id: 5,
                title: 'Task 5',
                isDone: false
            },
            {
                id: 6,
                title: 'Task 6',
                isDone: false
            }
        ]
    }

    toogleTodo = (id) => {
        this.setState({
            todoListItem : this.state.todoListItem = this.state.todoListItem.map(item => {
                if(item.id !== id) {
                    return item
                }else {
                    return {...item, isDone: !item.isDone}
                }
            })
        }) 
    }

    deleteTodo = (e,id) => {   
        e.stopPropagation()
        this.setState(prevState => ({
            todoListItem: this.state.todoListItem.filter(item => item.id !== id)
        }))
    }

    addTodo = (e) => {
        const inputs = document.querySelector('.edit')
        let newObj = {id:this.state.todoListItem.length + 1, title: inputs.value, isDone: false }
        this.state.todoListItem.push(newObj)
        this.setState(({
            todoListItem: this.state.todoListItem
        }))
        console.log( this.state.todoListItem)
    }

    render() {
        return (
            <div className="app">
                <TodoList 
                        todos={this.state.todoListItem} 
                        onToogle={this.toogleTodo} 
                        deleteTodo={this.deleteTodo}
                />
                <TodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}
