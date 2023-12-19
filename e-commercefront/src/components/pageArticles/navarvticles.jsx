import React, { useState } from 'react'
import ChaussureApp from './chaussure'
import TshirreApp from './tshirt'
import RobesApp from './robe'
import SacApp from './sac'
import DerniersInfoApp from './dernieresheures'
// import OffreReduxApp from './offres&&reducs'






const Navarticles=()=>{
    const [blocChaussure,setBlocChaussure]=useState(true)
    const [blocTshirt,setBlocTshirt]=useState(false)
    const [blocRobe,setBlocRobe]=useState(false)
    const [blocSac,setBlocSac]=useState(false)
    const [blocDernierInfos,setBlocDernierInfos]=useState(false)
    // const [blocOffresredux,setBlocOffresredux]=useState(false)

    const handlearticle=(e)=>{
        if(e.target.id=="chaussureApp"){
            setBlocChaussure(true)
            setBlocTshirt(false)
            setBlocRobe(false)
            setBlocSac(false)
            setBlocDernierInfos(false)
            // setBlocOffresredux(false)
        }
        if(e.target.id=="t-shirApp"){
            setBlocChaussure(false)
            setBlocTshirt(true)
            setBlocRobe(false)
            setBlocSac(false)
            setBlocDernierInfos(false)
            // setBlocOffresredux(false)
        }
        if(e.target.id=="robeApp"){
            setBlocChaussure(false)
            setBlocTshirt(false)
            setBlocRobe(true)
            setBlocSac(false)
            setBlocDernierInfos(false)
            // setBlocOffresredux(false)
        }
        if(e.target.id=="sacApp"){
            setBlocChaussure(false)
            setBlocTshirt(false)
            setBlocRobe(false)
            setBlocSac(true)
            setBlocDernierInfos(false)
            // setBlocOffresredux(false)
        }
        if(e.target.id=="dernierinfosApp"){
            setBlocChaussure(false)
            setBlocTshirt(false)
            setBlocRobe(false)
            setBlocSac(false)
            setBlocDernierInfos(true)
            // setBlocOffresredux(false)
        }
        if(e.target.id=="offrereduxApp"){
            setBlocChaussure(false)
            setBlocTshirt(false)
            setBlocRobe(false)
            setBlocSac(false)
            setBlocDernierInfos(false)
            // setBlocOffresredux(true)
        }
    }
    return(
    <>
        <nav className=' border-b-2 '>
            <ul className='flex justify-between mx-8 cursor-pointer capitalize pt-1 '>
                <li onClick={handlearticle} id='chaussureApp' className={blocChaussure ? "bg-yellow-700 text-neutral-100 p-2 rounded-t-lg transition-[1s] bg-opacity-70 w-52 text-center": null}>chaussures</li>
                <li onClick={handlearticle} id='t-shirApp' className={blocTshirt ? "bg-yellow-700 text-neutral-100 p-2 rounded-t-lg transition-[1s] bg-opacity-70 w-52 text-center": null}>t-shirts</li>
                <li onClick={handlearticle} id='robeApp' className={blocRobe ? "bg-yellow-700 text-neutral-100 p-2 rounded-t-lg transition-[1s] bg-opacity-70 w-52 text-center": null}>robes</li>
                <li onClick={handlearticle} id='sacApp' className={blocSac ? "bg-yellow-700 text-neutral-100 p-2 rounded-t-lg transition-[1s] bg-opacity-70 w-52 text-center": null}>sac</li>
                <li onClick={handlearticle} id='dernierinfosApp' className={blocDernierInfos ? "bg-yellow-700 text-neutral-100 p-2 rounded-t-lg transition-[1s] bg-opacity-70 w-52 text-center": null}>reduction</li>
                {/* <li onClick={handlearticle} id='offrereduxApp'>dernieres heures</li> */}
            </ul>
            </nav>
            {blocChaussure && <ChaussureApp/> || blocTshirt && <TshirreApp/> || blocRobe && <RobesApp/> || blocSac && <SacApp/> || blocDernierInfos && <DerniersInfoApp/> }
            {/* || blocOffresredux && <OffreReduxApp/> */}
        </>
        
    )
} 

export default Navarticles