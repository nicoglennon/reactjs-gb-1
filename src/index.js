import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

const ThemeContext = React.createContext()

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

class App extends React.Component {
  state = {
    theme: 'light',
  }

  dispatch = action => {
    switch (action) {
      case 'TOGGLE_THEME':
        return this.setState(state => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        }))
      default:
        return this.state
    }
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          dispatch: this.dispatch,
        }}
      >
        <Demo />
      </ThemeContext.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
