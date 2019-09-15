import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { MgmtProvider, useMgmt } from './mgmt.js'
import api from './api'

const initialState = { theme: 'light' }

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return action.payload.newState
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    default:
      return state
  }
}

const Demo = () => {
  const [{ theme }, dispatch] = useMgmt()

  React.useEffect(() => {
    const fetchState = async () => {
      const state = await api.getState()
      console.log(state)
      if (state) {
        dispatch({
          type: 'UPDATE_STATE',
          payload: {
            newState: state,
          },
        })
      }
    }
    fetchState()
  }, [dispatch])

  const toggleThemeHandler = async () => {
    const themeChanged = await api.setTheme(
      theme === 'light' ? 'dark' : 'light'
    )
    if (themeChanged) {
      dispatch({ type: 'TOGGLE_THEME' })
    }
  }
  return (
    <div className={`demo-background ${theme}`}>
      <button onClick={toggleThemeHandler} className="theme-button">
        {theme}
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
