import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = React.useState(TASKS);

  React.useEffect( () => {
    axios.get('http://127.0.0.1:5000/tasks').then(resp => {
      setTasks(resp.data);
    });
  }, []); 

  const toggleComplete = (id, isComplete) => {
    console.log(isComplete)
    const mark = isComplete ? 'mark_incomplete' : 'mark_complete'

    axios.patch(`http://127.0.0.1:5000/tasks/${id}/${mark}`).then(resp => {
      console.log(resp.data)
      setTasks(prevTasks => {
        const updatedTasks = prevTasks.map(task => {
          // return task.id === id ? {...task, isComplete: !task.isComplete} :task;
          return task.id === id ? resp.data.task : task;


        });

        return updatedTasks;
      });
    });
  };
  const deleteTask = (id) => {
    axios.delete(`http://127.0.0.1:5000/tasks/${id}`).then( () => {
      setTasks(prevTasks => {
        const updatedTasks = prevTasks.filter(task => task.id !== id);
        return updatedTasks;
      });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
