
import { useState } from 'react'
import '../src/App.css';
import logo from "./assets/react.svg"
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './interfaces/Task';

interface Props {
  title?: string
}


export function App({title}: Props) {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn_React',
      completed: false
    }
  ]);

  const getCurrentTimeStamp = (): number => new Date().getTime();

    const addANewTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrentTimeStamp(), completed: false}]);
    
  const deleteATask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="bg-dark" style={{height: '100vh', width: '100vw'}}>
      {/* Navbar */}
      <nav className='navbar navbar-dark bg-primary'>
       <div className='container'>
        <a href='/' className='navbar-brand'>
          <img src={logo} alt="react_logo" style={{width: '4rem'}}/>
          {title && (
            <h1>{title}</h1>
          )}
        </a>
       </div>
      </nav>


      <main className="container p-4">
        <div className="row">
        <div className="col-md-4">
            <TaskForm addANewTask={addANewTask}/>
        </div>
        <div className="col md-8">
            <div className="row">
             <TaskList tasks={tasks} deleteATask={deleteATask}/>
            </div>
        </div>
        </div>
      </main>
    </div>
  )
}

