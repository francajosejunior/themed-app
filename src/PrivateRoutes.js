import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from './components/container'
import { loginSelector } from './features/login/loginSlice'

function PrivateRoutes({ path, component }) {
  const auth = useSelector(loginSelector)
  console.log('auth: ', auth)
  return (
    <>
      <Route
        path={path}
        render={props => {
          return <Container component={component} {...props} />
          // return auth.user.token ? (
          //   <Container component={component} {...props} />
          // ) : (
          //   <Redirect to="/auth" />
          // )
        }}
      />
    </>
  )
}

export default PrivateRoutes
