import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Profilpage from '../pages/profil'
import Accueil from '../pages/Accueil'
import Navbar from '../Navbar/navbarfile'




const RouterApp=()=>{
    return(
        <BrowserRouter>
                    <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Accueil/>} />
                    <Route path='/authentification-App' exact element={<Profilpage/>} />
                </Routes>
        </BrowserRouter>
    )
} 

export default RouterApp;