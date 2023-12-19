import React from "react"
import TitrePageApp from "../TitreApp/titre"
import Prix from "./chaussuresDoc/prix"
// import Pointurechaussure from "./chaussuresDoc/pointure"
// import Pubchaussure from "./chaussuresDoc/pub"
import ComposantChaussureApp from "./chaussuresDoc/composantChaussure"
import Composantprix from "./chaussuresDoc/composantprix"

const SacApp=()=>{
    return(
        <div>
            <div className="mt-0 my-20 w-[100%] relative flex items-center justify-center bg-gradient-to-r from-teal-600 to-blue-200">
                <TitrePageApp Titre1="Nos meilleurs accessoirs de luxe " Titre2="disposé pour vous" />
            </div>
            
            <div className=" mb-[12rem] flex ">
                <div className="w-[14%] ml-2 border-[1px] border-yellow-600 ">
                    <h1 className="border-b-[1px] border-yellow-600 text-center  h-80 pt-36 text-2xl">prix</h1>
                    <Composantprix/>
                    <Prix min="5k" max="10k"/>
                    <Prix min="15k" max="20k"/>
                    <Prix min="40k" max="plus"/> 

                    {/* <div >
                        <h1 className="border-2 text-center">Taille</h1>
                        <Composantprix/>
                        <Pointurechaussure pointure="L - M"/>  
                        <Pointurechaussure pointure="xl - 2xl"/>  
                        <Pointurechaussure pointure="xxxl- k"/>  
                        <Pointurechaussure pointure="v - z"/>  
                        <Pointurechaussure pointure="NM- 2M"/>
                    </div> */}

                    {/* <div > */}
                        {/* <h1 className="border-t-2 text-center">pub partenaire</h1> */}
                        {/* <Composantprix/> */}
                        {/* <Pubchaussure/> */}
                    {/* </div> */}

                </div>
                

                <div className="w-[71%] border-[1px] border-yellow-600 ">
                    <h1 className="border-b-2">caroussel</h1>
                    <div className="h-[500px] border-y-[1px] p-2 bg-neutral-100 border-yellow-600 overflow-y-scroll">
                        <ComposantChaussureApp nom="Louis vuiton" type="Textil" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/>
                        <ComposantChaussureApp nom="zara" type="coton" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/>
                        <ComposantChaussureApp nom="adidas" type="lène" description="Lorem ipsum dolor sit." quanti="36" prix="1200"/>
                       
                    </div> 
                    {/* <Lienchaussure/> */}

                </div>

                <div className="w-[12%] border-[1px] border-yellow-600">
                        <div className="h-36 text-center">
                            <h1 className="border-b-[1px] border-yellow-600 text-xl text-yellow-600">pub</h1>
                        </div>  
                </div>
                
            </div>
           
        </div>
    )
}

export default SacApp