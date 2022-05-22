import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({title, handleDelete, id}) => {
  return (
    <div>
        <TodoItem title = {title} id = {id} handleDelete={handleDelete}/>
    </div>
  )
}

export default TodoList