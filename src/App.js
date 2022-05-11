import logo from './logo.svg';
import './App.css';
import money from './money.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with diiakhongchuidit</h1>
        <img src={money} className="Moneyo" alt="" style={{ height: '300px' }} />

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
