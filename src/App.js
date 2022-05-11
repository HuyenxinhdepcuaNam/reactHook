import logo from './logo.svg';
import './App.css';
import money from './money.jpg'

function App() {
  let link = 'https://zingnews.vn/'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ color: 'red' }}>Hello world with diiakhongchuidit</h3>

        <img src={money} className="Moneyo" alt="" style={{ height: '300px' }} border={'10px solid yellow'} />

        <a
          className="App-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bao Zing
        </a>
      </header>
    </div>
  );
}

export default App;
