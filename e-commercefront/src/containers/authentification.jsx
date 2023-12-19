import React, { useState } from "react"
// ConnexionApp
// import InscriptionApp from "./Inscription"
import InscriptionApp from "../containers/Inscription"
// import ConnexionApp from "../containers/connexion"

import ConnexionApp from "./connexion"


const Authentification=()=>{

    const [blocconnexion,setBlocconnexion]=useState(false)
    const [blocinscription,setBlocinscription]=useState(true)

    const handleBlocAuth=(e)=>{
        if (e.target.id=="connexionApp") {
            setBlocconnexion(true)
            setBlocinscription(false)
        }
        if (e.target.id=="inscriptionApp") {
            setBlocconnexion(false)
            setBlocinscription(true)
        }
    }

    return (
      <div>
        <div className="border border-blue-400 p-5 flex items-start rounded-lg mt-12  hover:shadow hover:shadow-blue-700 hover:transition-[0.8s] ">
          <ul className="mr-10">
            <li
              onClick={handleBlocAuth}
              id="inscriptionApp"
              className="Btnauthentification"
            >
              inscription
            </li>
            <li
              onClick={handleBlocAuth}
              id="connexionApp"
              className="Btnauthentification"
            >
              connexion
            </li>
          </ul>
          {blocinscription && <InscriptionApp />}
          {blocconnexion && <ConnexionApp />}
        </div>
      </div>
    );
}

export default Authentification