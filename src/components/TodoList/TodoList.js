import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

export default class TodoList extends Component {
    render() {
        return (
            <div className="list">
                {this.props.todos.map(item => {
                    return <TodoItem 
                                key={item.id} 
                                item={item} 
                                onToogle={this.props.onToogle}
                                deleteTodo={this.props.deleteTodo}
                    />
                })}
            </div>
        )
    }
}
