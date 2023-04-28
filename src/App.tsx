import ReactSwitch from 'react-switch';
import './App.css';
import { Login } from './Login';
import { useState } from 'react';


function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(btn => (btn === "light" ? "dark" : "light"));
  }
  return (
    <div className="App" id={theme}>
      <ReactSwitch 
        onChange = {toggleTheme}
        checked= {theme === "dark"}

        /**Opcionais */
        checkedIcon={false}
        uncheckedIcon={false}
        onColor='#000'
      >

      </ReactSwitch>
      <Login/>
    </div>
  )
}

export default App
