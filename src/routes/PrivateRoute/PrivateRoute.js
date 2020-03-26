import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenServive from '../../services/token-service'
import TokenService from '../../services/token-service'

export default function PrivateRoute({ component, ...props }) {
    const Component = component
    return (
        <Route
          {...props}
          render={componentProps => (
              TokenService.hasAuthToken()
                ? <Component {...componentProps} />
                : <Redirect to= '/' />
          )}
          />
    )
}