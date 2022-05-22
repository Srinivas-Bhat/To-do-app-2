import React from 'react'

const TodoItem = ({title , handleDelete, id}) => {

    const deletes = () => {
        handleDelete(id)
    }

  return (
    <div>
        <input type="checkbox"  />
        {title}
        <button onClick={deletes}>delete</button>
    </div>
  )
}

export default TodoItem