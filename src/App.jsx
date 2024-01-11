import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TasksDetails';


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar React',
      completed: true,
    },
  ]);

  useEffect(() => {
            const fetchTasks = async () => {
              const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10'
              );
              setTasks(data)
            };
            fetchTasks();
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
  <Route
    path='/'
    element={(
      <>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </>
    )}
  />
  <Route path="/:taskTitle" element={<TaskDetails tasks={tasks} />} />
</Routes>

      </div>
    </Router>
  );
};

export default App;
