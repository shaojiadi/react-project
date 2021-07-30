import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
import PropTypes from 'prop-types'

export default class List extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    updateTodo:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired,
    deleteTodo:PropTypes.func.isRequired,
  }
  render() {
    const {todos,updateTodo,deleteTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(item=>{
            return <Item key={item.id} {...item}  updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
