import React from "react"
import TitrePageApp from "../TitreApp/titre"
import Composantprix from "./chaussuresDoc/composantprix"
import Prix from "./chaussuresDoc/prix"
import Pointurechaussure from "./chaussuresDoc/pointure"
// import Pubchaussure from "./chaussuresDoc/pub"
import ComposantChaussureApp from "./chaussuresDoc/composantChaussure"
import Robelogo from "../../images/Imgvetements/chemise/articleRobe.jpg"
// import FouterApp from "../../Fouter/fouter"
// import Navarticles from "./navarvticles"


const RobesApp=()=>{
    return(
        <>
        
        <div>
            <div className="mt-0 my-20 w-[100%] relative flex items-center justify-center bg-gradient-to-r from-red-600 to-purple-200">
                <TitrePageApp Titre1="Soyez Elegantes dans vos Robes" Titre2="Et faites rever" Image={Robelogo}/>
            </div>
            <div className="border-2 mb-[12rem] flex ">
                <div className="w-[14%] ml-2 border-[1px] border-yellow-600  ">
                    <h1 className="border-b-[1px] border-yellow-600 text-center  h-80 pt-36 text-2xl">prix</h1>
                    <Composantprix/>
                    <Prix min="10k" max="10k"/>
                    <Prix min="20k" max="40k"/>
                    <Prix min="70k" max="90k"/> 

                    <div >
                        <h1 className="text-center">Taille</h1>
                        {/* <Composantprix/> */}
                        <Pointurechaussure pointure="L - M"/>  
                        <Pointurechaussure pointure="xl - 2xl"/>  
                        <Pointurechaussure pointure="xxxl- k"/>  
                        <Pointurechaussure pointure="v - z"/>  
                        <Pointurechaussure pointure="NM- 2M"/>
                    </div>

                    {/* <div > */}
                        {/* <h1 className="border-t-2 text-center">pub partenaire</h1> */}
                        {/* <Composantprix/> */}
                        {/* <Pubchaussure/> */}
                    {/* </div> */}

                </div>
                

                <div className="w-[71%] border-[1px] border-yellow-600 ">
                    <h1 className="border-b-2">caroussel</h1>
                    <div className="h-[700px] border-y-[1px] p-2 bg-neutral-100 border-yellow-600 overflow-y-scroll ">
                        <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/>
                        <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/>
                        <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/>
                        <ComposantChaussureApp nom="Aribo" type="Nike" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/>
                    </div> 
                    {/* <Lienchaussure/> */}

                </div>

                <div className="w-[12%] border-[1px] border-yellow-600">
                        <div className="h-36 text-center">
                            <h1 className="border-b-[1px] border-yellow-600 text-xl text-yellow-600">pub</h1>
                        </div>  
                </div>
                
            </div>
            {/* <FouterApp/> */}
        </div>
        </>
    )
}

export default RobesApp