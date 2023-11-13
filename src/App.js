import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my portfolio website. I am currently working on it. Please
          check back later.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/petroshutak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn Profile
        </a>
      </header>
    </div>
  );
}

export default App;
