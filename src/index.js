import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { MgmtProvider, useMgmt } from './mgmt.js'
import api from './api'

const initialState = { theme: 'light', loading: true }

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

const actions = {
  updateState: async () => {
    const updatedState = await api.getState()
    if (updatedState) {
      return {
        type: 'UPDATE_STATE',
        payload: {
          newState: updatedState,
        },
      }
    }
    return null
  },
  toggleTheme: async currentTheme => {
    console.log(currentTheme)
    const themeChanged = await api.setTheme(
      currentTheme === 'light' ? 'dark' : 'light'
    )
    if (themeChanged) {
      return { type: 'TOGGLE_THEME' }
    }
    return null
  },
}

const Demo = () => {
  const [{ theme, loading }, mgmtActions] = useMgmt()

  const toggleThemeHandler = () => {
    mgmtActions.toggleTheme(theme)
  }
  useEffect(() => {
    if (loading) {
      mgmtActions.updateState()
    }
  }, [loading, mgmtActions])

  if (loading) {
    return <>Loading...</>
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
    <MgmtProvider
      reducer={rootReducer}
      initialState={initialState}
      actions={actions}
    >
      <Demo />
    </MgmtProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
