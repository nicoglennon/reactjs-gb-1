import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { MgmtProvider, useMgmt } from './mgmt.js'

const initialState = { theme: { current: 'light' }, text: { value: 'static' } }

const rootReducer = ({ theme, text }, action) => {
  return {
    theme: themeReducer(theme, action),
    text: textReducer(text, action),
  }
}

const themeReducer = (theme, action) => {
  console.log(theme, action)
  switch (action) {
    case 'TOGGLE_THEME':
      return { ...theme, current: theme.current === 'light' ? 'dark' : 'light' }
    default:
      return theme
  }
}

const textReducer = (text, action) => {
  switch (action) {
    default:
      return text
  }
}

const Demo = () => {
  const [{ theme, text }, dispatch] = useMgmt()
  return (
    <div className={`demo-background ${theme.current}`}>
      <button onClick={() => dispatch('TOGGLE_THEME')} className="theme-button">
        {text.value}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <MgmtProvider reducer={rootReducer} initialState={initialState}>
      <Demo />
    </MgmtProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
