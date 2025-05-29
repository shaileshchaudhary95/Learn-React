import { useState } from 'react'
import './App.css'

function App() {
  const [todoTask, setTodoTask] = useState([
    { id: 1, task: 'Go to gym', status: 'pending' },
    { id: 2, task: 'check', status: 'completed' },
    { id: 3, task: 'This', status: 'pending' }
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTodoTask([...todoTask, {
        id: Date.now(),
        task: newTask,
        status: 'pending'
      }]);
      setNewTask('');
    }
  };

  const toggleStatus = (id) => {
    setTodoTask(todoTask.map(todo =>
      todo.id === id ? { ...todo, status: todo.status === 'pending' ? 'completed' : 'pending' } : todo
    ));
  };

  const deleteTask = (id) => {
    setTodoTask(todoTask.filter(todo => todo.id !== id));
  };

  return (
    <>
      <div className='w-full min-w-min mx-auto p-2'>
        <div className="bg-gray-300 shadow rounded-2xl pb-4">
          <div className='bg-purple-950 pb-20 rounded-t-2xl'>
            <h1 className='text-white text-xl font-normal tracking-wide'>TODO List</h1>
          </div>

          <div className="bg-white shadow w-auto -mt-16 mx-4 py-4 rounded-xl flex justify-center items-center gap-3 flex-col">
            <input type="text" value={newTask}
              onChange={(e) => setNewTask(e.target.value)} placeholder='What would you like to do?' className='outline-none border-gray-700 border-b bg-white w-80 py-1 mx-6 placeholder-gray-700' />
            <button onClick={addTask} className='bg-red-600 text-white font-bold py-1.5 px-14 shadow-lg shadow-red-700 rounded'>Add</button>
          </div>

          <div className="bg-white shadow w-auto mt-3 mx-4 rounded-xl text-left py-8 px-2 text-black font-semibold">
            <h3 className='py-2'>Todo list</h3>

            <table className='table-auto w-full'>
              <thead className='bg-gray-200 '>
                <th className='py-2 px-3 border-b'>List</th>
                <th className='py-2 px-3 border-b'>Status</th>
                <th className='py-2 px-3 border-b'>Close</th>
              </thead>

              <tbody>
                {todoTask.map(todo => (

                  <tr>
                    <td className="px-4 w-72 py-3 border-b">{todo.task}</td>
                    <td className="px-4 py-3 border-b">
                      <button onClick={() => toggleStatus(todo.id)} className={`px-2 py-1 rounded ${todo.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{todo.status}</button>
                    </td>
                    <td className="px-4 py-3 border-b">
                      <button onClick={() => deleteTask(todo.id)} className="text-red-700">
                        <i className='ri-delete-bin-line shadow-lg shadow-red-700'></i>
                      </button>
                    </td>
                  </tr>

                ))}
              </tbody>

            </table>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
