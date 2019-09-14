import React, { useReducer } from 'react'
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

const Demo = () => (
  <ThemeContext.Consumer>
    {({ theme, dispatch }) => (
      <div className={`demo-background ${theme}`}>
        <button
          onClick={() => dispatch('TOGGLE_THEME')}
          className="theme-button"
        >
          {theme}
        </button>
      </div>
    )}
  </ThemeContext.Consumer>
)

const App = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState)

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        dispatch: dispatch,
      }}
    >
      <Demo />
    </ThemeContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
