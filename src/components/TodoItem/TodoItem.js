import React, { Component } from 'react'

export default class TodoItem extends Component {
    
    render() {
        return (
            <div 
            className={"item" + (this.props.item.isDone ? " done" : "")}
            onClick={() => {this.props.onToogle(this.props.item.id)}}
            >
                {this.props.item.title}
                <span 
                    className="delete" 
                    onClick={(e) => this.props.deleteTodo(e,this.props.item.id)}
                >
                    X
                </span>
            </div>
        )
    }
}
