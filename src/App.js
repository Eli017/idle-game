import logo from './logo.svg';
import {useState, useEffect} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [timeout, setTimeout] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      onUpdate();
    }, timeout);
    return () => clearInterval(interval);
  });


  //What happens within each second of the game?
  const onUpdate = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count}
        </p>
        <a
          className="App-link"
          onClick={() => setTimeout(100)}
        >
          Increase time speed
        </a>
      </header>
    </div>
  );
}

export default App;
