import React, { useContext, useReducer } from 'react'

const MgmtContext = React.createContext()

export const MgmtProvider = ({ reducer, initialState, actions, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  let mgmtActions = {}
  if (actions) {
    Object.keys(actions).forEach(key => {
      mgmtActions[key] = async args => {
        const action = await actions[key](args)
        dispatch(action)
      }
    })
  } else {
    mgmtActions = dispatch
  }
  return (
    <MgmtContext.Provider value={[state, mgmtActions]}>
      {children}
    </MgmtContext.Provider>
  )
}
export const useMgmt = () => useContext(MgmtContext)

export const MgmtConsumer = MgmtContext.Consumer
