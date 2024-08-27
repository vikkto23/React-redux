import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import './ListTask.css';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return filter === 'done' ? task.isDone : !task.isDone;
  });

  return (
    <div className="task-list-container">
      <div className="task-filter-buttons">
        <button className="filter-button" onClick={() => setFilter('all')}>All</button>
        <button className="filter-button" onClick={() => setFilter('done')}>Done</button>
        <button className="filter-button" onClick={() => setFilter('notDone')}>Not Done</button>
      </div>

      <div className="task-list">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
