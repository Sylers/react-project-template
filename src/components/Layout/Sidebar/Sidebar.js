import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../../actions/layoutSlice'

const Sidebar = () => {
    const ref = useRef(null)
    const dispatch = useDispatch()

    const isSidebarOpen = useSelector(({layout})=>layout?.sidebarOpen)


    console.log('isSidebarOpen', isSidebarOpen);

  return (
    <div ref={ref}>
        <div onClick={()=>dispatch(toggleSidebar())}>Toggle/Close Button</div>
        Sidebar
    </div>
  )
}

export default Sidebar