import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Profilpage from '../pages/profil'
import Accueil from '../pages/Accueil'
import Navbar from '../Navbar/navbarfile'
import SystemePaiement from '../paiements/paiementApp'
import Successfullypaie from '../paiements/success'
import TshirreApp from '../components/pageArticles/tshirt'
import ChaussureApp from '../components/pageArticles/chaussure'
import RobesApp from '../components/pageArticles/robe'
import SacApp from '../components/pageArticles/sac'
import OffreReduxApp from '../components/pageArticles/offres&&reducs'
import DerniersInfoApp from '../components/pageArticles/dernieresheures'






const RouterApp=()=>{
    return(
        <BrowserRouter>
                    <Navbar/>
                <Routes>
                    <Route path='/' exact element={<Accueil/>} />
                    <Route path='/authentification-App' exact element={<Profilpage/>} />
                    <Route path='/paiement' exact element={<SystemePaiement/>} />
                    <Route path='/achat-reuissie' exact element={<Successfullypaie/>} />
                    <Route path='/app/T-shirts' exact element={<TshirreApp/>} />
                    <Route path='/app/chaussures' exact element={<ChaussureApp/>} />
                    <Route path='/app/Robes' exact element={<RobesApp/>} />
                    <Route path='app/meilleursOffres/' exact element={<OffreReduxApp/>} />
                    <Route path='app/reductionpage/' exact element={<DerniersInfoApp/>} />
                    <Route path='/app/Sacs/luxe' exact element={<SacApp/>} />
                    {/* <Route path='' exact element={<RobesApp/>} /> */}
                </Routes>
        </BrowserRouter>
    )
} 

export default RouterApp;