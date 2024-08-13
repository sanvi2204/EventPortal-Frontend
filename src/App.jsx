
import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home  from './pages/Web/Home'
import Login from './pages/Web/Login'
import Register from './pages/Web/Register'
import UserLayout from './layout/UserLayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Web/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUser from './pages/Admin/OrganizerDashboard'
import Leftbar from './components/Admin/Leftbar'
import PaymentDetails from './pages/Web/PaymentProcessing'
import PaymentConfirmation from './pages/Web/PaymentConfirmation'
import EventManagerSearch from './components/Web/EventManagerSearch'
import EventManagerPage from './components/Web/EventManagerPage'
import BookingPortal from './components/Web/BookingPortal'
import RatingsAndReviews from './components/Web/RatingsAndReviews'
import PaymentProcessing from './pages/Web/PaymentProcessing'
import ManagerDashboard from './pages/Admin/ManagerDashoard'
import UserDashboard from './pages/User/UserDashboard'
import EventsDisplay from './components/Web/EventDisplay'
import AdminProduct from './pages/Admin/AdminProduct'
const App = () => {
  const [showNav, setShowNav] = useState(false);
    return (
        <>
         
 
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/event' element={<EventsDisplay />} />
                        <Route path="/Leftbar" element={<Leftbar/>}/> 
                        <Route path="/PaymentProcessing" element={<PaymentProcessing/>}/> 
                        <Route path="/PaymentConfirmation" element={<PaymentConfirmation/>}/> 
                    
                        <Route path='/Home' element={<Home />} /> 
                        <Route path='/' element={<Home />} /> 
                    </Route>


                  

                  
                    <Route element={<AdminLayout showNav={showNav} setShowNav={setShowNav} />}>
                        <Route path='/admin/users' element={<AdminUser />} />
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/EventManagerSearch' element={<EventManagerPage />} />
                        <Route path='/BookingPortal' element={<BookingPortal />} />
                        <Route path='/RatingsAndReviews' element={<RatingsAndReviews />} />
                        <Route path='/ManagerDashboard' element={<ManagerDashboard />} />
                        <Route path='/User' element={<UserDashboard />} />
                        <Route path='/Payment' element={<PaymentProcessing />} />
                        <Route path='admin/products' element={<AdminProduct/>} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
                   


        </>
    )
}

export default App