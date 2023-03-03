import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = ({children}) => {
    const isAuthenticated = useSelector(({auth})=> auth?.user?.authenticated)
    if(!isAuthenticated) return <Navigate to="login" />;
    return children
}

export default PrivateRoutes