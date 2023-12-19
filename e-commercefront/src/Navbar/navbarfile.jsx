import React, { useContext } from "react"
import logo from "../images/RETOUCHESLOGO/10.png"
import { Link } from "react-router-dom"
import { UtilisateurContext } from "../context/utilisateur"
import DeconnexionApp from "../containers/deconnexion"
// import ChaussureApp from "../components/pageArticles/chaussure"
// import RobesApp from "../components/pageArticles/robe"
// import TshirreApp from "../components/pageArticles/tshirt"
// import OffreReduxApp from "../components/pageArticles/offres&&reducs"
// import SacApp from "../components/pageArticles/sac"
// ChaussureApp
// RobesApp
// TshirreApp
// OffreReduxApp
// SacApp


const Navbar=()=>{
    const userId=useContext(UtilisateurContext)

    return(
        <nav className="navcontainer">
            <div className="fixed flex items-center justify-between border-b-2 w-[100%] border-yellow-500 shadow shadow-yellow-800 px-2 bg-neutral-50  portable:w-[35%] portable:justify-start">
                <Link to={"/"}>
                    <di className="flex items-center portable:mr-9">
                        <img src={logo} alt="logo" className="imagelogo"/>
                        <h1 className="titrelogo">Austin shop</h1>
                    </di>
                </Link>
                
                <ul className="containerlist">
                    {  userId ? (
                    <>
                        <Link to={'/'}>
                            <li className="mr-4 portable:text-[10px] portable:mx-1">Accueil</li>
                        </Link>
                        <Link to={"/authentification-App"}>
                            <li className="listcontainer portable:text-[10px] portable:mx-1">Articles
                                <ul className="souslistcontainer">
                                    <div className="souslist">
                                        <Link to={"/app/chaussures"}>
                                            <li className="px-10 py-4 text-base hover:border-2 hover:bg-blue-300 hover:bg-opacity-75">chaussures</li>
                                        </Link>
                                        <Link to={"/app/T-shirts"}>
                                            <li className="px-10 py-4 text-base hover:border-2 hover:bg-blue-300 hover:bg-opacity-75">t-shirt</li>
                                        </Link>
                                        <Link to={"/app/Robes"}>
                                            <li className="px-10 py-4 text-base hover:border-2 hover:bg-blue-300 hover:bg-opacity-75">robe</li>
                                        </Link>
                                        {/* <Link to={"/app/Sacs/luxe"}>
                                            <li className="px-10 py-4 text-base hover:border-2 hover:bg-blue-300 hover:bg-opacity-75">sac</li>
                                        </Link> */}
                                        {/* <Link to={"app/meilleursOffres/"}>
                                            <li className="px-10 py-4 text-base hover:border-2 hover:bg-blue-300 hover:bg-opacity-75">offres</li>
                                        </Link> */}
                                        <Link to={"app/reductionpage/"}>
                                            <li className="px-10 py-4 text-base hover:border-2 hover:bg-blue-300 hover:bg-opacity-75">reduction</li>
                                        </Link>
                                        {/* <li className="px-10 text-base hover:border-t-2">dernières heures</li> */}
                                    </div>
                                    
                                </ul>
                              </li>
                        </Link>
                            {/* <li className="mr-4">Help</li> */}
                            <li className="listcontainer portable:text-[10px] portable:mx-1">Help
                                <ul className="souslistcontainerHelp">
                                    <div className="souslistHelp">
                                        <li className="px-10 text-base">Commande non livré</li>
                                        <li className="px-10 text-base">Service après vente</li>
                                        <li className="px-10 text-base">Autres...</li>
                                    </div>
                                    
                                </ul>
                              </li>
                            <DeconnexionApp/>
                        
                    </>) :
                        (
                     <>
                        
                            <Link to={'/'}>
                                <li className="mx-2 portable:text-[10px] portable:mx-1">Accueil</li>
                            </Link>
                            <Link to={"/authentification-App"}>
                            <li className="portable:mx-1 portable:text-10px">connexion</li>
                            </Link>
                        
                     </> 
                        )
                     } 
             </ul>
                
            
            </div>
            
        </nav>
    )
} 

export default Navbar