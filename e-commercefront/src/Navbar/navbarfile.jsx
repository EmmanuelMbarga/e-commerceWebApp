import React, { useContext } from "react"
import logo from "../images/RETOUCHESLOGO/10.png"
import { Link } from "react-router-dom"
import { UtilisateurContext } from "../context/utilisateur"
import DeconnexionApp from "../containers/deconnexion"



const Navbar=()=>{
    const userId=useContext(UtilisateurContext)

    return(
        <nav className="flex relative z-50">
            <div className=" fixed flex items-center justify-between border-b-2 border-yellow-500 shadow shadow-yellow-800 px-2 w-[100%] bg-neutral-50">
            <Link to={"/"}>
                <di className="flex items-center">
                    <img src={logo} alt="logo" className="w-[80px]"/>
                    <h1 className="text-blue-900 uppercase font-bold">Austin shop</h1>
                </di>
            </Link>
                
            <ul className="flex">
                    {  userId ? (
                    <>
                        <Link to={'/'}>
                            <li className="mx-2">Accueil</li>
                        </Link>
                        <Link to={"/authentification-App"}>
                            <li className="mx-2">Articles</li>
                        </Link>
                            <li className="mx-2">Help</li>
                            <DeconnexionApp/>
                        
                    </>) :
                        (
                     <>
                        
                            <Link to={'/'}>
                                <li className="mx-2">Accueil</li>
                            </Link>
                            <Link to={"/authentification-App"}>
                            <li>connexion</li>
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