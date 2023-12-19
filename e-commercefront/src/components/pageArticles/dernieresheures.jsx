import React from "react"
// import TitrePageApp from "../TitreApp/titre"
import artileReduxe from '../../images/Imgvetements/chemise/chemise-noire-mot-ultra-an-dessus.jpg'
import reductionLogo from '../../images/ImgPub/pad.jpg'
import Articlespro from "./articlespromo/articlespromotion"

const DerniersInfoApp=()=>{
    return(
        <div>
            {/* <TitrePageApp Titre="Offres spéciales"/> */}
            <div>
                <img src={reductionLogo} alt="reduction shop" className="w-[100%] h-[626px] object-cover"/>
            </div>

            <div className="grid grid-cols-4 mx-24 gap-4 mt-12 ">
                

                <Articlespro Titre1="Carte entreprise" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-20%" Image={artileReduxe}/>
                <Articlespro Titre1="Logo" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-10%" Image={artileReduxe}/>
                <Articlespro Titre1="Banderole" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-15%" Image={artileReduxe}/>
                <Articlespro Titre1="Roll up" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-30%" Image={artileReduxe}/>
                <Articlespro Titre1="Charte graphique" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-50%" Image={artileReduxe}/>
                <Articlespro Titre1="Spot" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-5%" Image={artileReduxe}/>
                <Articlespro Titre1="Calendrier" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-18%" Image={artileReduxe}/>
                <Articlespro Titre1="Packaging" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-20%" Image={artileReduxe}/>
                <Articlespro Titre1="Packaging" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-30%" Image={artileReduxe}/>
                <Articlespro Titre1="Packaging" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-2%" Image={artileReduxe}/>
                <Articlespro Titre1="Packaging" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-9%" Image={artileReduxe}/>
                <Articlespro Titre1="Packaging" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-18%" Image={artileReduxe}/>
                <Articlespro Titre1="Packaging" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-50%" Image={artileReduxe}/>
                <Articlespro Titre1="Packaging" Titre2="carte de visite prenium faite by AB Graphix" pourcentage="-20%" Image={artileReduxe}/>

                

                {/* <div className="border w-72 ">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72 ">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72 ">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72 ">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72 ">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div>

                <div className="border w-72">
                    <div className="p-2">
                        <h1 className='font-bold'>Carte entreprise</h1>
                        <p className="text-sm">carte de visite prenium faite by AB Graphix</p>
                    </div>
                    <span className="bg-red-600 text-neutral-100 p-1">{"jusqu'a"} -20%</span>  
                    <img src={artileReduxe} alt="sneakers" className=""/>
                </div> */}

            </div>
        </div>
    )
}

export default DerniersInfoApp