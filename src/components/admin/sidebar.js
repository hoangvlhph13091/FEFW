import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse nav-dashboard" >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/admin/dashboard" className=" nav-link font-bold ml-1" >Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/products" className=" nav-link ml-1" >Product</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/categories" className=" nav-link ml-1" >categories</NavLink>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Sidebar

