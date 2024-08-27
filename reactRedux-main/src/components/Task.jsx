import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../actions/taskActions';
import './Task.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item">
      <span
        className={`task-description ${task.isDone ? 'task-completed' : ''}`}
        onClick={() => dispatch(toggleTask(task.id))}
      >
        {task.description}
      </span>
      <button className="delete-task-button" onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </button>
    </div>
  );
};

export default Task;
