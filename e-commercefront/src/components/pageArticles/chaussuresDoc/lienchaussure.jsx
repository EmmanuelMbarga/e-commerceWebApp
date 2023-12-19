import React, { useState } from "react"
import Cathegorie1 from "./cathegorieschaussures/cathegorie1"
import Cathegorie2 from "./cathegorieschaussures/cathegorie1"



const Lienchaussure=()=>{
    const [blocchaussures1,setBlocchaussures1]=useState(true)
    const [blocchaussures2,setBlocchaussures2]=useState(false)

    const handlechaussure=(e)=>{
        if(e.target.id=='cathegorie1'){
            setBlocchaussures1(false)
            setBlocchaussures2(true)
        }
        if(e.target.id=='cathegorie2'){
            setBlocchaussures1(true)
            setBlocchaussures2(false)

        }
    }

    return(
    
        <div>
            <ul className="text-sm flex justify-center cursor-default">
                <li onClick={handlechaussure} id="cathegorie1" className="mx-2 px-2 border cursor-pointer">1</li>
                <li onClick={handlechaussure} id="cathegorie2" className="mx-2 px-2 border cursor-pointer">2</li>
            </ul>
            <div>
                {blocchaussures1 && <Cathegorie1/> || blocchaussures2 && <Cathegorie2/>}
            </div>
        </div>
       
    )
} 

export default Lienchaussure