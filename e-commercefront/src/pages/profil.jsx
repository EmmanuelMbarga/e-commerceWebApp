import React, { useContext }  from "react"
import logo from "../images/imgconnexion/paiement-par-technologie-simple-sans-fil.jpg"
import { UtilisateurContext } from "../context/utilisateur"
import CommerceApp from "./pageArticle"
import Authentification from "../containers/authentification"
import FouterApp from "../Fouter/fouter"




const Profilpage=()=>{
    const userId=useContext(UtilisateurContext)

    
    return (
      <>
        { userId ? (
        <>
          <CommerceApp />

        </>
        ) : (
          <div className="flex my-12 h-[700px]">
                    <div>
                        <img src={logo} className="w-[500px] mr-56 " />
                    </div>
                    <div>
                        <Authentification/>
                    </div>
            </div>
         )
        }


        <FouterApp/>
      </>
    );
} 

export default Profilpage