import React from 'react'
import { Outlet } from 'react-router'

const LayoutWebsite = () => {
    return (
        <div> 
            <Outlet/>   
        </div>
    )
}

export default LayoutWebsite