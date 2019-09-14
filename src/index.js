import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { MgmtProvider, useMgmt } from './mgmt.js'

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
  const [{ theme }, dispatch] = useMgmt()
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
    <MgmtProvider reducer={themeReducer} initialState={initialState}>
      <Demo />
    </MgmtProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
