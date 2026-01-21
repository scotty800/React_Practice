import { useState } from 'react';
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import CounterDisplay from './Components/CounterDisplay';
import CounterButton from './Components/CounterButtons';

function App() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Switch Theme</button>
      <h1>Shared Counter</h1>
      <CounterDisplay count={count} />
      <CounterButton setCount={setCount} />
    </div>
  );
}

export default App;
