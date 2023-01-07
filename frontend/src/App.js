import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import './App.css';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async function () {
    try {
      const headerValue = 'Authorization';
      const response = await axios.get('/api/tasks', {
        headers: {
          [headerValue]: 'Bearer abc',
        },
      });
      setTasks(response.data.tasks);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  async function addTaskHandler(task) {
    try {
      const headerValue = 'Authorization';
      const response = await axios.post(
        '/api/tasks',
        { ...task },
        {
          headers: {
            'Content-Type': 'application/json',
            [headerValue]: 'Bearer abc',
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='App'>
      <section>
        <NewTask onAddTask={addTaskHandler} />
      </section>
      <section>
        <button onClick={fetchTasks}>Fetch Tasks</button>
        <TaskList tasks={tasks} />
      </section>
    </div>
  );
}

export default App;
