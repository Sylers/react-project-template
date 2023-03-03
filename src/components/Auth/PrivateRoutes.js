import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = ({component: Component}) => {
    const isAuthenticated = useSelector(({authenticated})=> authenticated)
    if(!isAuthenticated) return <Navigate to="login" />;
    return Component
}

export default PrivateRoutes