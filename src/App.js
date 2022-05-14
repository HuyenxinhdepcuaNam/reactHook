import logo from './logo.svg';
import './App.css';
import Covid from './views/Covid'
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Todo from './views/Todo'
import { CountDown, NewCountDown } from './views/Countdown';
import {
  BrowserRouter,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";

function App() {
  let [name, setName] = useState('diiakhongchuidit')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Learning React hook', type: 'eric' },
    { id: 'todo2', title: 'Doing React hook', type: 'eric' },
    { id: 'todo3', title: 'Reading React hook', type: 'abc' },

  ])

  useEffect(() => {

  }, [])

  const handleEventClick = (event) => {
    if (!address) {
      toast.error("unKnown!")
      return
    }
    let newTodo = { id: Math.floor(Math.random() * 1000), title: address, type: 'eric' }
    setTodos([...todos, newTodo])
    setAddress('')
    toast.success("Succeeded!")
  }

  const deleteDataTodo = (id) => {
    let currentTodo = todos
    currentTodo = currentTodo.filter(item => item.id !== id)
    setTodos(currentTodo)
  }


  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)


  }
  const onTimeUp = () => {
    alert('Time out')
  }

  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/home">
              <Covid />
            </Route>
            <Route path="/todo"  >
              <Todo
                todos={todos}
                title={'All todos'}
                deleteDataTodo={deleteDataTodo}
              />
              <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
              <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
            </Route>
            <Route path="/timer">
              <CountDown onTimeUp={onTimeUp} />
              <span>----------------------</span>
              <NewCountDown onTimeUp={onTimeUp} />
              <h3 style={{ color: 'red' }}>Hello world with {name}</h3>
            </Route>
            <Route path="/secret">
              {/* <Home /> */}
            </Route>
          </Switch>

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
    </BrowserRouter>
  );
}

export default App;
