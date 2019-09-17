import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import './App.css'

const ThemeContext = React.createContext()

const Demo = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className={`demo-background ${theme}`}>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="theme-button"
      >
        {theme}
      </button>
    </div>
  )
}

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Demo />
    </ThemeContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
