import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useAuth } from './contexts/AuthContext'

export default function PrivateRoute(props) {
  const { component: Component, ...rest } = props

  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={prop => {
        return currentUser ? <Component {...prop} /> : <Redirect to="/login" />
      }}
    />
  )
}
