import React, { useState } from 'react';
import {v4 as uuid} from "uuid";
import TodoList from "./TodoList";

const Todo = () => {
    const [value, setValue] = useState("");
    const [todoArr, settodoArr] = useState([]);

    const handleChange = () => {
        const data = {
            id: uuid(),
            title: value,
        }
        settodoArr([...todoArr, data]);
    }

    const handleDelete = (id) => {
        let updatedArr = todoArr.filter((el) => el.id!==id)
        settodoArr(updatedArr);
    }

  return (
    <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleChange}>Add</button>
        {todoArr.map((el) => (
            <TodoList key = {el.id} id= {el.id} handleDelete={handleDelete} title = {el.title}/>
        ))}
    </div>
  )
}

export default Todo