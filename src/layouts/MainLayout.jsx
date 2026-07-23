import React, { Suspense } from 'react'
import '../css/MianLayout.css'
import { Outlet } from 'react-router'
import Navbar from '../companets/Navbar'
import Footer from '../companets/Footer'
import Loading from '../companets/Loading'


function MainLayout() {

  
    return (
      <div className="MainLayout">
          <div className='contener'>
            <Navbar />
            <main>
                <Suspense fallback={<Loading/>}>
                  <Outlet />
                </Suspense>
            </main>
            <Footer />
        </div>
      </div>
    )
}

export default MainLayout;