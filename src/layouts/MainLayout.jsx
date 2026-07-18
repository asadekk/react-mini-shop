import React from 'react'
import '../css/MianLayout.css'
import { Outlet } from 'react-router'
import Navbar from '../companets/Navbar'
import Footer from '../companets/Footer'


function MainLayout() {

  
    return (
      <div className="MainLayout">
          <div className='contener'>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
      </div>
    )
}

export default MainLayout;