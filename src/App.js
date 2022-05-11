import logo from './logo.svg';
import './App.css';
import money from './money.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ color: 'red' }}>Hello world with diiakhongchuidit</h3>

        <img src={money} className="Moneyo" alt="" style={{ height: '300px' }} border={'10px solid red'} border-radius={'5000px'} padding={'100px'} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
