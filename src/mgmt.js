import React, { useContext, useReducer } from 'react'

const MgmtContext = React.createContext()

export const MgmtProvider = ({ reducer, initialState, children }) => (
  <MgmtContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </MgmtContext.Provider>
)
export const useMgmt = () => useContext(MgmtContext)

export const MgmtConsumer = MgmtContext.Consumer
