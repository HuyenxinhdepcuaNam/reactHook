import logo from './logo.svg';
import './App.css';
import money from './money.jpg'
import Nav from './views/Nav';
import { useState } from 'react';


function App() {
  let [name, setName] = useState('diiakhongchuidit')
  const [address, setAddress] = useState('')

  const handleEventClick = (event) => {
    setName(address)
  }
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)


  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ color: 'red' }}>Hello world with {name}</h3>

        <img src={money} className="Moneyo" alt="" style={{ height: '300px' }} border={'10px solid yellow'} />
        <input type={'text'} value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button
          type='button'
          onClick={(event) => handleEventClick(event)}

        >Click me</button>
      </header>
    </div>
  );
}

export default App;
