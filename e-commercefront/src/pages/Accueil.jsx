import React from "react"
import SliderPub from "../components/Slider"
import TransitionApp from "../components/Transitionaccueil"
import ArticlesPresentation from "../containers/iconAffiche"
import FouterApp from "../Fouter/fouter"

const Accueil=()=>{
    return(
        <>
            <div className="mt-24">
                    <SliderPub/>
                    <TransitionApp/>
                    <ArticlesPresentation/>
                    <FouterApp/>
                    
            </div>
        </>
    )
} 

export default Accueil