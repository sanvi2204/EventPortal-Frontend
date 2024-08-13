import Leftbar from '@/components/Admin/Leftbar'
import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'
import React from 'react'
import { Outlet, Route } from 'react-router-dom'

const HomeLayout = () => {

    return (
        <>
                
                
                <Navbar />
            <div className='h-screen w-screen overflow-x-hidden m-0 p-0  flex-col overflow-y-auto'style={{}}>
                <Outlet />
            </div>
                <Footer />
        </>
    )
}

export default HomeLayout