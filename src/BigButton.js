import React from 'react'
import CountContext from './CountContext'

const BigButton = () => (
  <CountContext.Consumer>
    {value => <button>The count is currently {value}</button>}
  </CountContext.Consumer>
)

export default BigButton
