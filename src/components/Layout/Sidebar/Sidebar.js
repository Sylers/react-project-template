import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../../actions/layoutSlice'

const Sidebar = () => {
    const ref = useRef(null)
    const dispatch = useDispatch()

    const isSidebarOpen = useSelector(({layout})=>layout?.sidebarOpen)

  return (
    <div ref={ref}>
        <button onClick={()=>dispatch(toggleSidebar())}>Toggle Sidebar function</button>
        <span>{'=>'} {isSidebarOpen ? 'Open' : 'Closed'}</span>
    </div>
  )
}

export default Sidebar