import React, { Component } from 'react'

export default class TodoList extends Component {

    render() {
        return (
            <div className="form">
                <input className="edit" type="text" />
                <input 
                        className="add" 
                        type="submit"
                        onClick={(e) => {this.props.addTodo(e)}}
                />
            </div>
        )
    }
}
