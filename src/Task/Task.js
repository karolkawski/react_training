import React from 'react';
import './Task.css'

// import $ from 'jquery';

function Task({task, handleRemove, handleToggle}) {

    const handleClick = (e) => {
        handleRemove(e.currentTarget.id)
    }

    const handleClickCheckbox = (e) => {
        handleToggle(e.currentTarget.id)
    }

    return (
        <div className={task.complete ? "task task--complete" : "task"}>
            <input className="task__input" type="checkbox" name="done" value="done" id={task.id} onClick={handleClickCheckbox}></input>
            <div className="task__name">{task.name}</div>
            <button id={task.id} onClick={handleClick}>Delete</button>
        </div>
    );
};

export default Task;