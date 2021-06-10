import React from 'react';
// import $ from 'jquery';
import Task from '../Task/Task';

function List({tasks, handleRemove, handleToggle}) {
    return (
        <div>
           {tasks.map(task => {
               return (
                <Task key={task.id} task={task} handleToggle={handleToggle} handleRemove={handleRemove}/>
               )
           })}
        </div>
    );
};

export default List;