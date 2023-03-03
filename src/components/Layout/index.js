import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({component: Component}) => {
  return (
    <>
        <Header>Header</Header>
        <Sidebar></Sidebar>
        <div className='content'>{Component}</div>
        <Footer>Footer</Footer>
    </>
  )
}

export default Layout