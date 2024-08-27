import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1 className="app-title">To-Do List</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
