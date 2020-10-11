/**
 * Web Dev Simplified
 * React Authentication Crash Course With Firebase And Routing
 * YouTube: https://youtu.be/PKwu15ldZ7k
 */
import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

import Dashboard from './Dashboard'
import Signup from './Signup'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import PrivateRoute from './PrivateRoute'
import UpdateProfile from './UpdateProfile'

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  )
}

export default App
