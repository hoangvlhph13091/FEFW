import React from 'react'
import { Navigate, Outlet, NavLink } from 'react-router-dom';
import Header from '../components/admin/header'
import Sidebar from '../components/admin/sidebar'

export default function LayoutAdmin() {
  return (

    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="table-responsive">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>

  )
}
