import logo from './logo.svg';
import './App.css';
import money from './money.jpg'
import Nav from './views/Nav';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Todo from './views/Todo'

function App() {
  let [name, setName] = useState('diiakhongchuidit')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Learning React hook', type: 'eric' },
    { id: 'todo3', title: 'Doing React hook', type: 'eric' },
    { id: 'todo3', title: 'Reading React hook', type: 'abc' },

  ])

  const handleEventClick = (event) => {
    if (!address) {
      toast.error("unKnow!")
      return
    }
    let newTodo = { id: Math.floor(Math.random() * 1000), title: address, type: 'eric' }
    setTodos([...todos, newTodo])
    setAddress('')
    toast.success("Succeeded!")
  }


  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)


  }
  return (
    <div className="App">

      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ color: 'red' }}>Hello world with {name}</h3>
        <Todo
          title={'All todos'}
          todos={todos} />
        <Todo
          title={'Eric todos'}
          todos={todos.filter(item => item.type === 'eric')} />

        <img src={money} className="Moneyo" alt="" style={{ height: '300px' }} border={'10px solid yellow'} />
        <input type={'text'} value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button
          type='button'
          onClick={(event) => handleEventClick(event)}

        >Click me</button>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
