import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Provider, connect } from 'react-redux'
import { createStore, bindActionCreators } from 'redux'

const initialState = { theme: 'light' }

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return Object.assign({}, state, {
        theme: state.theme === 'light' ? 'dark' : 'light',
      })
    default:
      return state
  }
}

const store = createStore(themeReducer)

const actions = {
  toggleTheme: () => {
    return {
      type: 'TOGGLE_THEME',
    }
  },
}

const mapStateToProps = state => {
  return { state: state }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

const Demo = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ state, actions }) => (
  <div className={`demo-background ${state.theme}`}>
    <button onClick={actions.toggleTheme} className="theme-button">
      {state.theme}
    </button>
  </div>
))

const App = () => (
  <Provider store={store}>
    <Demo />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
