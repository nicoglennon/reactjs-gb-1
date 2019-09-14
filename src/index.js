import React, { useReducer, useContext } from 'react'
import ReactDOM from 'react-dom'
import './App.css'

const ThemeContext = React.createContext({})

const initialState = { theme: 'light' }

const themeReducer = (state, action) => {
  switch (action) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    default:
      return state
  }
}

const Demo = () => {
  const [{ theme }, dispatch] = useContext(ThemeContext)
  return (
    <div className={`demo-background ${theme}`}>
      <button onClick={() => dispatch('TOGGLE_THEME')} className="theme-button">
        {theme}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <ThemeContext.Provider value={useReducer(themeReducer, initialState)}>
      <Demo />
    </ThemeContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
