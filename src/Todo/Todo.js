import React, {useState} from 'react';
// import $ from 'jquery';
import './Todo.css'
import List from '../List/List';

function Todo() {
    const [userInput, setUserInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks(tasks => [...tasks, {
            id: tasks.length+1,
            name: userInput,
            complete: false
        }
        ]);
        setUserInput('');
        console.log(tasks)
    }

    const handleToggle = (id) => {
        let mapped = tasks.map(task => {
            return task.id == id ? { ...task, complete: !task.complete } : { ...task};
          });
          setTasks(mapped);
    }

    const handleRemove = (id) => {
        console.log('remove', id)
        let filtered = tasks.filter(task => {
            return task.id != id;
          });
          setTasks(filtered);
    }


    return (
        <div className="todo">
            <div className="todo__wrapper">
                <div className="todo__add-task">
                    <input className="todo__input" value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
                    <button className="todo__button" onClick={handleSubmit}>Add task</button>
                </div>
                <div className="todo__actions">
                </div>
                <div className="todo__list">
                    <List tasks={tasks} handleRemove={handleRemove} handleToggle={handleToggle}/>
                </div>
            </div>
        </div>
    );
};

export default Todo;