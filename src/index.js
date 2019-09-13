import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

const Demo = ({ theme, toggleTheme }) => {
  return (
    <div className={`demo-background ${theme}`}>
      <button onClick={toggleTheme} className="theme-button">
        {theme}
      </button>
    </div>
  )
}

class App extends React.Component {
  state = {
    theme: 'light',
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }))
  }

  render() {
    return <Demo theme={this.state.theme} toggleTheme={this.toggleTheme} />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
